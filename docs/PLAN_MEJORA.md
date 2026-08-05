# Plan de mejora de poke-web

Lista de acciones ordenadas por prioridad para corregir errores, reducir deuda técnica y mejorar la calidad del proyecto. Cada ítem incluye el **porqué** del arreglo y una **casilla de verificación** para marcar el progreso. Las referencias entre paréntesis apuntan a las secciones de [AUDITORIA.md](./AUDITORIA.md).

---

## Leyenda

- `[ ]` Pendiente
- `[x]` Hecho
- Los ítems están numerados del 1 al 21 y ordenados de mayor a menor impacto. Se recomienda resolver en ese orden.

---

## P1 — Bugs críticos (hacer ya)

### 1. `usePokemonDetail.js:72` → `formData.sprites.front_shiny` (2.1)
- [ ] Cambiar `|| sprites?.front_shiny` por `|| formData.sprites?.front_shiny`
- **Por qué:** si una mega no tiene imagen shiny en `official-artwork`, el segundo operando de `||` evalúa una variable **inexistente**, lanzando `ReferenceError` y rompiendo la página de detalle. ESLint ya lo marca con `no-undef`.

### 2. Unificar mapa de regiones; corregir `unova` → `teselia` en `useRegionId` (2.2)
- [ ] Crear un único mapa región → id (p. ej. en `src/js/regions.js`) y consumirlo desde `useRegionId`, `pokemonPage` y `useGymLeaders`
- [ ] Cambiar la clave `unova` → `teselia` en `src/hooks/useRegionId.js:9`
- **Por qué:** `useRegionId` usa `unova: 5` mientras las rutas navegan a `/teselia`; al entrar, `generationUrl` queda `null` y `RegionDetail` muestra **"0 Pokémon originales"**. Tener tres mapas distintos garantiza que vuelvan a desincronizarse.

### 3. `PokemonModal.jsx` → que `usePokemonDetails` use el Pokémon del contexto (2.3)
- [ ] En `src/component/PokemonModal.jsx:17`, pasar `pokemon?.name` (del contexto) en lugar de `name` (de `useParams`)
- [ ] Usar o eliminar las variables `types`, `loading`, `error` sin uso
- **Por qué:** el modal abre desde el buscador en cualquier ruta; fuera de `/pokemon/:name` pide `pokemon/undefined` y mezcla el header del Pokémon buscado con las habilidades/movimientos/evoluciones del Pokémon de la URL.

### 4. Eliminar `DetailComponent.jsx` y `Home.jsx` (código muerto, 2.4/3.1)
- [ ] Eliminar `src/component/DetailComponent.jsx`
- [ ] Eliminar `src/component/Home.jsx`
- [ ] Eliminar `src/useFetch.js`
- [ ] Limpiar imports y `console.log` comentados (`App.jsx:1`, `usePokemonDetail.js:51,57`, `MegaPokemon.jsx:23`, `LeadersPage.jsx:9`)
- [ ] Mover nota de depuración larga en `PokemonRegion.jsx:61-63` a un issue o eliminarla
- **Por qué:** `DetailComponent.jsx` usa variables inexistentes (`openIndex`, `setOpenIndex`) que lanzarían `ReferenceError`; los demás archivos no tienen consumidores. El código muerto confunde, se puede importar por error y duplica lógica. La nota de depuración ensucia el código.

### 5. Corregir `Progress.jsx` y los rangos de `getStatColor` (2.5, 2.6)
- [ ] `Progress.jsx:2` → `Math.min((value / max) * 100, 100)`
- [ ] Centralizar `getStatColor` en un solo lugar y corregir la condición duplicada (`>80` y `>20` devuelven el mismo `bg-yellow-500`)
- **Por qué:** `Math.min` con un solo argumento no limita nada (la barra se desborda), y la función de colores repetida en 3 archivos tiene un rango mal definido y se desincroniza.

### 6. `index.html`: `lang="es"` + favicon (2.7)
- [ ] Cambiar `lang="en"` → `lang="es"`
- [ ] Crear `public/favicon.svg` o quitar la referencia a `/vite.svg`
- **Por qué:** el sitio es 100% en español y el `lang` incorrecto perjudica accesibilidad y SEO; `/vite.svg` no existe (404) porque no hay carpeta `public/`.

### 7. `response.ok` en todos los fetch (2.8)
- [ ] Añadir `if (!response.ok) throw ...` en `RegionDetail.jsx`, `useFilter.js`, `usePokemonAbilities.js` y `usePokemonDetail.js`
- **Por qué:** sin esta comprobación, un 403/500 de PokeAPI se traduce en `SyntaxError: ... is not valid JSON`, un mensaje engañoso que oculta la causa real.

---

## P2 — Refactor y calidad

### 8. Crear capa API + `usePokemonList` y eliminar `src/useFetch.js` (3.2)
- [ ] Crear `src/api/pokeApi.js` (URL base y helpers) y un hook `usePokemonList`
- [ ] Refactorizar `pokemonPage.jsx` para usarlo
- **Por qué:** la URL `https://pokeapi.co/api/v2/...` está hardcodeada en 7+ sitios y la lógica "lista → detalles → ordenar por id" se repite. Una capa central hace el código DRY, testeable y fácil de evolucionar.

### 9. `AbortController` / manejo de respuestas obsoletas en todos los hooks (3.3)
- [ ] Añadir `AbortController` o flag `isCancelled` en `usePokemonDetail`, `usePokemonAbilities`, `useFilter`, `pokemonPage`, `RegionDetail`, `Navbar`
- **Por qué:** navegar rápido entre Pokémon (p. ej. por evoluciones) puede pintar una respuesta antigua sobre la actual, mostrando datos incorrectos sin error aparente.

### 10. Extraer vista compartida de detalle y `BackLink`; que el modal reutilice `usePokemonDetails(pokemon?.name)` (3.7)
- [ ] Crear `PokemonDetailView` con `Header`, `Tabs`, `Info`, `Stats`, `Moves` y `MegaEvolutions`
- [ ] Usarlo en `PokemonDetails.jsx` y `PokemonModal.jsx`
- [ ] Crear `BackLink` para el botón "← Regresar" (repetido en 4 páginas)
- **Por qué:** el modal copia casi todo el layout de la página de detalle; cada cambio de diseño hay que aplicarlo dos veces y es fuente de desincronización.

### 11. Reducir requests en `usePokemonDetail` (3.4)
- [ ] Añadir caché por URL (`Map` / `sessionStorage`)
- [ ] Limitar la carga de movimientos (el listado ya muestra 10 y "Cargar más")
- [ ] Cachear tipos en `useFilter.js` para evitar pedir todos los tipos en cada montaje
- **Por qué:** un Pokémon con ~120 movimientos genera **más de 150 requests** por visita (uno por movimiento + tipos + megas con habilidades), abusando de PokeAPI y ralentizando la página. Además, `useFilter` repite peticiones en cada montaje innecesariamente.

### 12. `useGymLeaders` síncrono o con import dinámico (3.8)
- [ ] Devolver datos de forma síncrona (`return regionsData[region] ?? []`) o con import dinámico por región
- [ ] Eliminar el `console.error` de producción
- **Por qué:** los datos son estáticos (build time) pero se guardan en estado con `useEffect`, y se importan las 9 regiones (1.778 líneas) para mostrar solo una: trabajo innecesario y peso extra en el bundle.

### 13. Centralizar `getStatColor`, traducciones y mapas en `src/js/` (3.5)
- [ ] Mover `getStatColor`, `getPokemonImage`, mapas de tipos y de regiones a `src/js/`
- [ ] Eliminar la duplicación entre `typeTranslation` (`pokemonPage.jsx`), `typeTranslations.js` y `useFilter.js`
- [ ] Extraer helpers de imágenes locales en `Info.jsx:9-13` para reutilizar los de `Card.jsx`
- **Por qué:** existen tres fuentes de verdad para tipos/regiones y helpers copiados entre componentes; es la raíz de discrepancias como `unova`/`teselia`.

### 14. Limpiar ESLint (3.9)
- [ ] Quitar imports de `React` innecesarios (runtime JSX automático)
- [ ] Migrar `eslint.config.js` a `react.configs.flat.recommended`
- [ ] Añadir validación de props (PropTypes o migrar a TypeScript)
- **Por qué:** 159 errores ocultan problemas reales (`no-undef`) entre ruido de `prop-types`/`no-unused-vars`; sin validación de props los errores de forma solo aparecen en producción.

### 15. Eliminar dependencia `lucide` sin uso (3.10)
- [ ] Quitar `lucide` de `package.json` (solo se usa `lucide-react`)
- **Por qué:** duplica peso de instalación y confunde sobre qué librería de iconos usar.

---

## P3 — Accesibilidad, tests y repo

### 16. `div` con `onClick` → botones reales; cerrar modal con Escape/backdrop; reemplazar `alert()` (3.6)
- [ ] Convertir a botones con `role`, `tabIndex` y teclado (`PokemonRegion`, `RegionModal`)
- [ ] Solucionar `Boton` anidado dentro de un `div` con `onClick` en `RegionModal.jsx:27`
- [ ] Cerrar el modal con `Escape` y clic en el backdrop, y refactorizar `usePokemonModal` para exponer un estado más limpio
- [ ] Reemplazar `alert()` en `Navbar.jsx` por un mensaje inline accesible
- [ ] Cambiar "Reintentar" (`PokemonDetails.jsx`) para re-lanzar el fetch en vez de `window.location.reload()`
- [ ] Añadir `alt` descriptivos o `aria-label` faltantes en imágenes e iconos
- **Por qué:** los clickables sin semántica son inaccesibles para lectores de pantalla y teclado; `alert()` es bloqueante; recargar la página destruye el estado de la app. El anidamiento interactivo es inválido y faltan textos alternativos.

### 17. Fallback de imagen real en `public/` y arreglar `LeadersPage.jsx:76` (3.6)
- [ ] Crear `/fallback-image.png` real (o usar un placeholder externo) o quitar el fallback
- **Por qué:** el fallback apunta a un archivo que no existe, así que la imagen rota sigue rota; un fallback válido mejora la UX.

### 18. Corregir datos: ramas evolutivas, nombres de líderes, clases CSS con acentos (3.5)
- [ ] Manejar ramas de evolución (no solo `evolves_to[0]`)
- [ ] Corregir nombres de variables en `gymLeadersPaldea.js` (imgKaty → Araceli, etc.)
- [ ] Traducir `damage_class` al español en `Acordeon.jsx:48`
- [ ] Eliminar/reemplazar clases CSS con acentos (`Psíquico`, `Dragón`, `Eléctrico`) y el `bg-green-500` conflictivo en `Header.jsx:13`
- [ ] Corregir typos: `hoenImage`, `spanihName`, clase inválida `lg-mx-4`
- **Por qué:** los datos inconsistentes producen bugs sutiles y son difíciles de mantener; las clases con acentos no las detecta Tailwind JIT; los typos confunden al leer el código. Los textos en inglés rompen la internacionalización de la UI.

### 19. Añadir tests (Vitest + React Testing Library) y script `test` (3.10)
- [ ] Configurar Vitest + React Testing Library
- [ ] Añadir `script test` en `package.json`
- [ ] Cubrir: mapa de regiones, filtro de tipos, hook de detalle (mocks de fetch), Card y modal
- **Por qué:** no existe ni un solo test; sin red de seguridad cada refactor de P2 puede romper funcionalidad sin que nadie lo note.

### 20. Reescribir `README.md` con documentación real del proyecto (3.10)
- [ ] Documentar: qué es poke-web, cómo ejecutarlo, estructura de carpetas, fuente de datos
- **Por qué:** el README actual es el template de Vite; un nuevo colaborador no puede entender ni arrancar el proyecto.

### 21. Verificar `CNAME`, assets y estilos para el despliegue (3.10)
- [ ] Corregir `CNAME` (`poke-webgithub.io` parece un typo: falta el punto)
- [ ] Añadir `base` en `vite.config.js` si se publica en subpath de GitHub Pages
- [ ] Refactorizar `index.css`: extraer estilos a Tailwind y limpiar código no usado. Revisar `App.css`
- [ ] Estandarizar nombres de imágenes (eliminar prefijos raros y acentos)
- **Por qué:** un `base` incorrecto rompe los assets tras el build y un CNAME mal escrito redirige mal el dominio. Mantener CSS limpio e imágenes estandarizadas facilita el mantenimiento a largo plazo.

---

## Progreso

| Prioridad | Total | Hechos |
|---|---|---|
| P1 | 7 | 0 |
| P2 | 8 | 0 |
| P3 | 6 | 0 |
| **Total** | **21** | **0** |

> Actualiza la tabla de progreso a medida que marques casillas.
