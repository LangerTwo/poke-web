import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { regionIdMap } from '../js/regions';

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