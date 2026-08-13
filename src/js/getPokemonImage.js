export const getPokemonImage = (sprites) => {
    return sprites?.other?.['official-artwork']?.front_default ||
           sprites?.other?.dream_world?.front_default ||
           sprites?.front_default ||
           null;
};

export const getPokemonImageShiny = (sprites) => {
    return sprites?.other?.['official-artwork']?.front_shiny ||
           sprites?.front_shiny ||
           null;
};
