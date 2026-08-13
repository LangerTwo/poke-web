# Auditoría de poke-web

Documento de revisión técnica del proyecto **poke-web**: errores funcionales, malas prácticas, deudas técnicas y un plan de mejora priorizado.

- **Fecha de revisión:** 2026-07-31
- **Stack:** Vite 5 + React 18 + Tailwind CSS 3 + react-router-dom 6 + Swiper 11
- **Fuente de datos:** PokeAPI (https://pokeapi.co)

---

## 1. Resumen general

| Indicador | Valor |
|---|---|
| Archivos de código | ~45 (`src/**`) |
| Errores ESLint | 159 |
| Advertencias ESLint | 3 |
| Tests | No existen (sin script `test` en `package.json`) |
| Código muerto / comentado | Alto (2 archivos completos + fragmentos en otros) |
| Dependencias no utilizadas | `lucide` (solo se usa `lucide-react`) |

La aplicación funciona en su flujo principal, pero acumula: **1 bug que puede romper en runtime** (Referencia a variable inexistente), **1 bug de ruteo/datos** (región Teselia), **1 bug de lógica en el modal de búsqueda**, rendimiento deficiente en la página de detalle (cientos de requests), código muerto heredado y cero pruebas.

---

## 2. Errores críticos (funcionales)

Estos son los problemas que pueden romper o degradar visiblemente la app.

### 2.1 `ReferenceError: sprites is not defined`
- **Archivo:** `src/hooks/usePokemonDetail.js:72`
- **Problema:** en el mapeo de mega evoluciones se usa `|| sprites?.front_shiny`, pero la variable `sprites` no existe en ese ámbito (debería ser `formData.sprites`).
- **Impacto:** `ReferenceError` en runtime si una mega no tiene `official-artwork.front_shiny`. ESLint lo marca con `no-undef`.
- **Fix sugerido:**
  ```js
  shinySprite: formData.sprites?.other?.["official-artwork"]?.front_shiny || formData.sprites?.front_shiny,
  ```

### 2.2 Región Teselia rota en el contador y `generationUrl`
- **Archivos:** `src/hooks/useRegionId.js:9`, `src/page/pokemonPage.jsx:15`, `src/js/regions.js:48`
- **Problema:** `useRegionId` mapea la región con la clave **`unova: 5`**, mientras que las rutas, `regions.js` y `pokemonPage.jsx` usan **`teselia`**. Al navegar a `/teselia`, `useRegionId` devuelve `regionId = null` y `generationUrl = null`.
- **Impacto:** en `src/page/RegionDetail.jsx` el contador queda en **"0 Pokémon originales"** (el fetch nunca corre) y cualquier lógica que dependa de `generationUrl` falla silenciosamente. En cambio, `pokemonPage.jsx` sí funciona porque define su propio mapa con `teselia: 5`. Hay tres fuentes de verdad distintas para el mismo dato.
- **Fix sugerido:** unificar en un único mapa (p. ej. `src/js/regions.js`) y que `useRegionId` lo consuma; corregir `unova` → `teselia`.

### 2.3 El modal de búsqueda mezcla datos de dos Pokémon distintos
- **Archivo:** `src/component/PokemonModal.jsx:17`
- **Problema:** el modal obtiene los detalles con `usePokemonDetails(name)`, donde `name` proviene de `useParams()` (la ruta actual). La búsqueda del Navbar abre el modal en **cualquier** ruta; si no estás en `/pokemon/:name`, `name` es `undefined` y el hook llama a `https://pokeapi.co/api/v2/pokemon/undefined`. Además, el modal renderiza el `<Header pokemon={pokemon} />` del **contexto** (el buscado), pero las habilidades, evoluciones, movimientos y megas se piden para el Pokémon **de la URL**. Resultado: información mezclada o inexistente.
- **Nota:** `types`, `loading` y `error` se desestructuran pero no se usan (ESLint lo marca).
- **Fix sugerido:** `usePokemonDetails` debe recibir el Pokémon del contexto (`pokemon.name`) en lugar de `useParams`, o reusar un solo hook compartido entre página y modal.

### 2.4 Código muerto que crashearía si se ejecuta
- **Archivo:** `src/component/DetailComponent.jsx:24-26`
- **Problema:** `toggleAccordion` referencia `openIndex` y `setOpenIndex`, variables que **no existen** en ese ámbito (código rescatado de un componente con estado). También usa `getStatColor`, `statMapping` y `toggleAccordion` declarados pero sin uso.
- **Impacto:** `ReferenceError` en runtime si se llegara a importar; hoy el archivo no se usa en ningún lugar (código muerto).
- **Fix sugerido:** eliminar el archivo (ver sección 3.1).

### 2.5 `Progress.jsx` no limita el porcentaje a 100
- **Archivo:** `src/component/Progress.jsx:2`
- **Problema:** `Math.min((value / max) * 100)` pasa un único argumento a `Math.min`, por lo que no hay clamp; un valor `> max` produce barras que se desbordan (el comentario dice "Limitar al 100%").
- **Fix sugerido:** `Math.min((value / max) * 100, 100)`. Nota: el componente no se usa en la app actual.

### 2.6 Colores de estadísticas con condiciones duplicadas
- **Archivos:** `src/component/normalDetails/Stats.jsx:3-9`, `src/component/megaDetails/MegaStats.jsx:4-10`, `src/component/DetailComponent.jsx:6-12`
- **Problema:** `> 80` y `> 20` devuelven el mismo `bg-yellow-500`; el rango naranja queda para 41–80. La lógica probablemente pretendía: `>60` naranja y `>20` amarillo, pero quedó mal.
- **Fix sugerido:** centralizar una única función `getStatColor` (extraer a `src/js/` o un `utils`) con rangos correctos y reutilizarla en los tres sitios.

### 2.7 `index.html` con favicon inexistente y `lang="en"`
- **Archivo:** `index.html:2,5`
- **Problema:** referencia `/vite.svg`, pero no existe carpeta `public/` (favicon → 404). El atributo `lang="en"` es incorrecto para un sitio íntegramente en español (afecta accesibilidad/SEO).
- **Fix sugerido:** crear `public/favicon.svg` (o quitar la referencia) y cambiar `lang="es"`.

### 2.8 Fetchs sin comprobar `response.ok`
- **Archivos:** `src/page/RegionDetail.jsx:17`, `src/hooks/useFilter.js:13`, `src/hooks/usePokemonAbilities.js:17`, `src/hooks/usePokemonDetail.js:23,50,56,82`
- **Problema:** varios `fetch` hacen `.json()` sin verificar `response.ok`. Un 403/500 de PokeAPI (problema ya reportado por el autor en `PokemonRegion.jsx:61`) produce un `SyntaxError` enmascarado como "JSON inválido".
- **Fix sugerido:** verificar `if (!response.ok) throw ...` en todos los fetch.

---

## 3. Malas prácticas y deuda técnica

### 3.1 Código muerto y comentado
- `src/component/Home.jsx`: archivo completo comentado (55 líneas).
- `src/component/DetailComponent.jsx`: componentes sin uso (ya no se importan desde `PokemonDetails.jsx`).
- `src/useFetch.js`: hook heredado sin consumidores, con `console.log` de depuración y sin manejo de race conditions.
- `src/App.jsx:1`: import comentado.
- `console.log` / `console.error` de depuración sin limpiar: `src/useFetch.js` (4), `src/hooks/usePokemonDetail.js:51,57`, `src/page/LeadersPage.jsx:9` (comentado), `src/component/MegaPokemon.jsx:23` (comentado).
- `src/page/PokemonRegion.jsx:61-63`: nota larga de un problema del autor debería vivir en un issue, no en el código.
- `src/hooks/useGymLeaders.js:34`: `console.error` en producción.

### 3.2 Fetch duplicado y sin capa de abstracción
- La URL base `https://pokeapi.co/api/v2/...` está hardcodeada en: `src/useFetch.js`, `src/hooks/useFilter.js`, `src/hooks/usePokemonDetail.js`, `src/hooks/usePokemonAbilities.js`, `src/page/pokemonPage.jsx`, `src/page/RegionDetail.jsx`, `src/component/Navbar.jsx`.
- **Misma lógica repetida** de "pedir lista → resolver detalles → ordenar por id": `src/useFetch.js:17-54` y `src/page/pokemonPage.jsx:20-38`.
- **Fix sugerido:** crear un cliente API (`src/api/pokeApi.js`) y un hook `usePokemonList` reutilizable.

### 3.3 Race conditions en todos los efectos de datos
- Ningún `fetch` usa `AbortController` ni ignora respuestas obsoletas. Navegar rápido entre Pokémon (p. ej. por evoluciones) puede pintar datos de una respuesta anterior.
- **Fix sugerido:** `AbortController` + `finally` con flag `isCancelled` en `usePokemonDetail`, `usePokemonAbilities`, `useFilter`, `useFetch`, `pokemonPage`.

### 3.4 Rendimiento
- `src/hooks/usePokemonDetail.js`: por cada Pokémon hace **1 request del Pokémon + species + cada type + cada move + cadena evolutiva + cada variedad mega con sus habilidades**. Un Pokémon con ~120 movimientos genera **más de 150 requests** por visita. Sin caché ni paginación.
  - **Fix sugerido:** cachear por URL (`Map`/`sessionStorage`), limitar movimientos (el listado ya muestra 10 con "Cargar más"), o pedir solo datos españoles realmente mostrados.
- `src/hooks/useGymLeaders.js:4-12`: importa **eagerly** los 9 archivos de datos (1.778 líneas de imágenes estáticas) para devolver 1 región. Debería importar solo la región pedida (import dinámico o un mapa por clave).
- `src/hooks/useFilter.js`: vuelve a pedir todos los tipos en cada montaje de `Filter` (por cada página de región). Podría cachearse.

### 3.5 Datos: inconsistencias y corrección
- **Evoluciones lineales:** `src/hooks/usePokemonDetail.js:83-88` solo sigue `evolves_to[0]`, ignorando ramas. Pokémon con evoluciones alternativas (Eevee, Tyrogue, etc.) muestran un solo camino.
- **Tres mapas de regiones distintos:** `pokemonPage.jsx` (`teselia: 5`), `useRegionId.js` (`unova: 5`), `useGymLeaders.js` (claves). Ver 2.2.
- **Traducciones duplicadas:** `src/js/typeTranslations.js`, el objeto `typeTranslation` dentro de `pokemonPage.jsx:73-79` y `src/hooks/useFilter.js` (que devuelve nombres en español). Tres fuentes para el mismo dato.
- **Nombres de variables engañosos en datos Paldea:** `src/js/GymLeaders/gymLeadersPaldea.js` declara `imgKaty`, `imgBrassius`, `imgIono`... pero el archivo asigna la imagen de **Araceli** a `imgKaty`, de **Brais** a `imgBrassius`, de **e-Nigma** a `imgIono`, etc. Difícil de mantener.
- **Tipos en español como clases CSS:** `index.css` define `.Fuego`, `.Psíquico`, etc. y `Card.jsx`/`Header.jsx` las usan dinámicamente. Las clases con acentos/non-ASCII (`Psíquico`, `Dragón`, `Eléctrico`) son frágiles y no generables por Tailwind (JIT no las detecta si aparecen solo en runtime).
- **Detalle:** `Header.jsx:13` mezcla `bg-green-500` (Tailwind) con la clase custom `${translatedType}2`, generando conflicto de estilos impredecible.
- **Typos:** `src/js/regions.js:3` (`hoenImage`), `src/hooks/useFilter.js:23` (`spanihName`), `src/hooks/usePokemonDetail.js:72` (`sprites`).
- **`damage_class` sin traducir** en `Acordeon.jsx:48` (muestra "special" / "physical" en inglés).
- **Clase inválida** `lg-mx-4` en `src/component/Filter.jsx:17` (debería ser `lg:mx-4`).
- **Imágenes de fallback:** `LeadersPage.jsx:76` usa `/fallback-image.png` que no existe en `public/`.

### 3.6 Accesibilidad y UX
- `src/page/PokemonRegion.jsx:33` y `src/component/RegionModal.jsx:27`: `div` con `onClick` sin `role="button"`, `tabIndex`, teclado ni `aria`.
- `src/component/RegionModal.jsx:27`: `Boton` (un `<button>`) anidado dentro de un `div` con `onClick` → doble disparo de navegación y anidamiento interactivo inválido.
- `src/component/Navbar.jsx:20`: usa `alert()` para errores (bloqueante, feo, sin estilos).
- El modal no se cierra con `Escape` ni clic en el backdrop.
- `src/page/PokemonDetails.jsx:27`: el botón "Reintentar" recarga toda la página (`window.location.reload()`) en vez de re-lanzar el fetch.
- Faltan `alt` descriptivos o `aria-label` en varias imágenes/iconos.

### 3.7 Duplicación de UI (copy-paste)
- `PokemonModal.jsx` replica casi todo el layout de `PokemonDetails.jsx` (TabsDetailsPokemon, Header, Tabs, Info, Stats, Moves, Mega). **Cualquier cambio de diseño hay que hacerlo dos veces.**
- El botón "← Regresar" se repite en 4 páginas con la misma clase (`text-green-500 hover:underline`).
- **Fix sugerido:** extraer `PokemonDetailView` compartido y un componente `BackLink`.

### 3.8 Estado y hooks
- `src/hooks/useGymLeaders.js:28-37`: guarda datos **estáticos** (importados en build time) en estado con `useEffect`; basta con `return regionsData[region] ?? []` de forma síncrona.
- `usePokemonModal` no expone un método `isOpen`/`setOpen` limpio ni maneja el cierre por teclado.
- `src/component/normalDetails/Info.jsx:9-13`: helpers de imágenes definidos en cada render (irrelevante pero innecesario); el mismo helper ya existe en `Card.jsx:10`.

### 3.9 Errores de ESLint y configuración
- **159 errores / 3 warnings.** Agrupación principal:
  - `react/prop-types`: la mayoría (ningún componente valida props).
  - `no-unused-vars`: imports `React` sobrantes (se usa el runtime automático de JSX) y variables sin usar.
  - `no-undef`: `sprites` (2.1) y `openIndex/setOpenIndex` (2.4).
  - `react-hooks/exhaustive-deps`: 3 warnings.
- `eslint.config.js` mezcla reglas legacy (`react.configs.recommended`) con el runtime JSX automático; se recomienda migrar a `react.configs.flat.recommended` + `flat/jsx-runtime`.
- Sin `prop-types` en runtime ni TypeScript: errores de forma solo aparecen en producción.

### 3.10 Configuración y repo
- `README.md` es el template por defecto de Vite (no documenta el proyecto).
- Dependencia `lucide` en `package.json` sin uso (solo se usa `lucide-react`).
- Sin tests ni `script test`.
- `index.css` (284 líneas) mezcla estilos de tipos, componentes y utilidades custom; la mayoría podría ser Tailwind o extraerse.
- `App.css` prácticamente vacío (58 bytes).
- `CNAME` apunta a `poke-webgithub.io` (sin `.` entre "web" y "github") — verificar si es un dominio real o un typo. Además no hay configuración `base` en `vite.config.js`; en un subpath de GH Pages los assets podrían no resolverse (con dominio custom en la raíz funciona).
- Imágenes con nombres y prefijos inconsistentes (`165px-...`, `90px-...`, `300px-...`, acentos).

---

## 4. Inventario de errores ESLint por archivo

| Archivo | Errores | Descripción principal |
|---|---|---|
| `src/component/DetailComponent.jsx` | 37 | prop-types, `no-undef`, sin uso (dead code) |
| `src/component/RegionModal.jsx` | 16 | prop-types (`region`, `onClose`, `onNavigate`) |
| `src/component/normalDetails/informacion/infoAbilities.jsx` | 8 | `React` sin usar + prop-types |
| `src/component/normalDetails/Info.jsx` | 8 | `React` sin usar + prop-types |
| `src/component/normalDetails/Header.jsx` | 6 | `React` sin usar + prop-types |
| `src/component/megaDetails/MegaAbilities.jsx` | 6 | `React` sin usar + prop-types |
| `src/component/CardRegionDetail.jsx` | 6 | prop-types |
| `src/component/megaDetails/MegaHeader.jsx` | 5 | `React` sin usar + prop-types |
| `src/component/normalDetails/informacion/infoDescription.jsx` | 4 | `React` sin usar + prop-types |
| `src/component/normalDetails/Stats.jsx` | 4 | `React` sin usar + prop-types |
| `src/component/megaDetails/MegaSwiper.jsx` | 4 | `React` sin usar + prop-types |
| `src/component/Progress.jsx` | 4 | prop-types |
| `src/component/PokemonModal.jsx` | 4 | `React`, `types`/`loading` sin usar |
| `src/component/MegaPokemon.jsx` | 4 | `React` sin usar, prop-types |
| `src/useFetch.js` | 3 | `error` sin usar (dead code) |
| `src/component/megaDetails/MegaTabs.jsx` | 3 | `React` sin usar + prop-types |
| `src/component/megaDetails/MegaStats.jsx` | 3 | `React` sin usar + prop-types |
| `src/component/TabsDetailsPokemon.jsx` | 3 | prop-types |
| `src/component/normalDetails/Tabs.jsx` | 3 | `React` sin usar + prop-types |
| `src/component/normalDetails/informacion/infoSwiper.jsx` | 3 | prop-types |
| `src/component/normalDetails/informacion/InfoEvoluciones.jsx` | 3 | `React` sin usar + prop-types |
| `src/component/Card.jsx` | 3 | `React` sin usar, prop-types |
| `src/component/Acordeon.jsx` | 3 | prop-types (`moves`) |
| `src/component/Filter.jsx` | 2 | `React` sin usar, prop-types |
| `src/component/Navbar.jsx` | 2 | `React` sin usar, `error` sin usar |
| `src/context/PokemonModalContext.jsx` | 1+1w | prop-types `children`, fast-refresh |
| `src/hooks/useFilter.js` | 1 | `error` sin usar |
| `src/hooks/usePokemonDetail.js` | 1 | `sprites` no definido |
| `src/page/LeadersPage.jsx` | 1 | `React` sin usar |
| `src/page/PokemonDetails.jsx` | 2 | `useEffect` sin usar, `types` sin usar |
| `src/page/PokemonRegion.jsx` | 1 | `React` sin usar |
| `src/page/RegionDetail.jsx` | 2+2w | `React`/`useParams` sin usar, exhaustive-deps |
| `src/page/pokemonPage.jsx` | 3 | `React`, `error`/`err` sin usar |

---

## 5. Plan de mejora priorizado

### P1 — Bugs críticos (hacer ya)
1. `usePokemonDetail.js:72` → `formData.sprites.front_shiny` (2.1).
2. Unificar mapa de regiones; corregir `unova` → `teselia` en `useRegionId` (2.2).
3. `PokemonModal.jsx` → que `usePokemonDetails` use el Pokémon del contexto (2.3).
4. Eliminar `DetailComponent.jsx` y `Home.jsx` (código muerto, 2.4/3.1).
5. Corregir `Progress.jsx` y los rangos de `getStatColor` (2.5, 2.6).
6. `index.html`: `lang="es"` + favicon (2.7).
7. `response.ok` en todos los fetch (2.8).

### P2 — Refactor y calidad
8. Crear capa API + `usePokemonList` y eliminar `src/useFetch.js`.
9. `AbortController` / manejo de respuestas obsoletas en todos los hooks.
10. Extraer vista compartida de detalle y `BackLink` (3.7); que el modal reutilice `usePokemonDetails(pokemon?.name)`.
11. Reducir requests en `usePokemonDetail` (caché + límite de movimientos) (3.4).
12. `useGymLeaders` síncrono o con import dinámico (3.8).
13. Centralizar `getStatColor`, traducciones y mapas en `src/js/` (3.5).
14. Limpiar ESLint: quitar imports `React`, migrar a `react.configs.flat.recommended`, añadir `prop-types` (o migrar a TypeScript).
15. Eliminar dependencia `lucide` sin uso.

### P3 — Accesibilidad, tests y repo
16. `div` con `onClick` → botones reales con rol/teclado; cerrar modal con Escape/backdrop; reemplazar `alert()` (3.6).
17. Fallback de imagen real en `public/` y arreglar `LeadersPage.jsx:76`.
18. Corregir datos: ramas evolutivas, nombres de líderes, clases CSS con acentos (3.5).
19. Añadir tests (Vitest + React Testing Library) y script `test`.
20. Reescribir `README.md` con documentación real del proyecto.
21. Verificar `CNAME` / `base` para el despliegue (3.10).

---

*Documento generado como auditoría técnica; las referencias `archivo:línea` corresponden a la revisión del 2026-07-31.*
