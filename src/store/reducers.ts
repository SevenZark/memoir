// App
import Store from '@memoir/types/storeType';
import initialState from './initialState';
import actions from './actions';

function reducers(state: Store = initialState, action) {

    switch (action.type) {

        case actions.SET_DECK: {
            return {
                ...state,
                deck: action.payload
            }
        }

        case actions.INCREMENT_CARD_FLIPS: {
            const numCardFlips = state.numCardFlips + 1
            return {
                ...state,
                numCardFlips
            }
        }

        case actions.ADD_TO_FLIPPED_CARDS: {

            const flippedCards = [...state.flippedCards];
            const cardId = action.payload;

            !flippedCards.includes(cardId) && flippedCards.push(action.payload);

            return {
                ...state,
                flippedCards
            }
        }

        case actions.CLEAR_FLIPPED_CARDS: {
            return {
                ...state,
                flippedCards: []
            }
        }

        case actions.ADD_TO_MATCHED_CARDS: {
            const matchedCards = [...state.matchedCards];
            matchedCards.push(action.payload);
            return {
                ...state,
                matchedCards
            }
        }

        case actions.CLEAR_MATCHED_CARDS: {
            const matchedCards = [];
            return {
                ...state,
                matchedCards: []
            }
        }

        default: return state;
    }
}

export default reducers;