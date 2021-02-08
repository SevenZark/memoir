import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFlippedCards, addToMatchedCards } from '@memoir/store/actionCreators';

const rememberTimeoutSeconds = 3;

function startCountdown(dispatch) {
    window.setTimeout(() => {
        dispatch(clearFlippedCards());
    }, rememberTimeoutSeconds * 1000)
}

function useHandleCardFlips() {

    const dispatch = useDispatch();
    const flippedCards = useSelector(state => state.flippedCards);
    const getFaceId = cardIndex => flippedCards[cardIndex].split('.')[0];

    function handleFlippedPair() {

        const faceId0 = getFaceId(0);
        const faceId1 = getFaceId(1);

        if (faceId0 === faceId1) {
            dispatch(addToMatchedCards(faceId0))
            dispatch(clearFlippedCards());
            return;
        }

        startCountdown(dispatch);
    }

    useEffect(() => {
        flippedCards.length === 2 && handleFlippedPair();
    }, [JSON.stringify(flippedCards)]);
}

export default useHandleCardFlips;