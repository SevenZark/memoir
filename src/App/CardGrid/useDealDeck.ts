import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// App
import { setDeck } from '@memoir/store/actionCreators';
import { createDeck, shuffleDeck } from '@memoir/common/utility/deckInitHelpers';

function useDealDeck() {

    const deck = useSelector(state => state.deck);

    const dispatch = useDispatch();

    useEffect(() => {
        if (deck.length === 0) {
            dispatch(setDeck(shuffleDeck(createDeck())))
        }
    }, []);
}

export default useDealDeck;