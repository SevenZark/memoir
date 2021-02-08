import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function useCalcFaceUp(cardId) {

    const [isFaceUp, setIsFaceUp] = useState(false);

    const flippedCards = useSelector(state => state.flippedCards);

    useEffect(() => {
        setIsFaceUp(flippedCards.includes(cardId))
    }, [JSON.stringify(flippedCards)]);

    return isFaceUp;
}

export default useCalcFaceUp;