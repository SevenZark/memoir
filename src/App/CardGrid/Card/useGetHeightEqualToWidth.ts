import { useLayoutEffect, useState } from 'react';

function useGetHeightEqualToWidth(linkEl) {

    const [height, setHeight] = useState(null);

    useLayoutEffect(() => {

        // Yes, this is hacky, but aspect-ratio is not supported
        // in enough browsers yet. ¯\_(ツ)_/¯
        function resizeHeight() {
            const cardWidth = window.getComputedStyle(linkEl.current).width;
            setHeight(cardWidth);
        }

        resizeHeight();

        window.addEventListener('resize', resizeHeight);

        return () => window.removeEventListener('resize', resizeHeight);
    }, [])

    return height;
}

export default useGetHeightEqualToWidth;