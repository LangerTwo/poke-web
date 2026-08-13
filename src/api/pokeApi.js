const BASE_URL = 'https://pokeapi.co/api/v2';

export const checkOk = (res) => {
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    return res.json();
};

export const fetchGeneration = (regionId, signal) => 
    fetch(`${BASE_URL}/generation/${regionId}`, { signal }).then(checkOk);

export const fetchPokemon = (name, signal) =>
    fetch(`${BASE_URL}/pokemon/${name}`, { signal }).then(checkOk);

export const fetchType = (type, signal) =>
    fetch(`${BASE_URL}/type/${type}`, { signal }).then(checkOk);
