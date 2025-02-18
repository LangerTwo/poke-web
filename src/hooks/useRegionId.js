import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const regionIdMap = {
    kanto: 1,
    johto: 2,
    hoenn: 3,
    sinnoh: 4,
    unova: 5,
    kalos: 6,
    alola: 7,
    galar: 8,
    paldea: 9,
};

const useRegionId = () => {
    const { regionName } = useParams();
    const [generationUrl, setGenerationUrl] = useState(``);
    const [regionId, setRegionId] = useState(null);

    useEffect(() => {
        if (regionName) {
            const regionId = regionIdMap[regionName.toLowerCase()];
            if (regionId) {
                setRegionId(regionId);
                setGenerationUrl(`https://pokeapi.co/api/v2/generation/${regionId}`);
            } else {
                setRegionId(null);
                setGenerationUrl(null);
            }
        }
    }, [regionName]);

    return { regionName, regionId, generationUrl };
}

export default useRegionId;