// Apps
import actions from './actions';

function setDeck(deck) {
    return {
        type: actions.SET_DECK,
        payload: deck
    }
}

function incrementCardFlips() {
    return { type: actions.INCREMENT_CARD_FLIPS };
}

function addToFlippedCards(cardId) {
    return {
        type: actions.ADD_TO_FLIPPED_CARDS,
        payload: cardId
    };
}

function clearFlippedCards() {
    return { type: actions.CLEAR_FLIPPED_CARDS };
}

function addToMatchedCards(cardId) {
    return {
        type: actions.ADD_TO_MATCHED_CARDS,
        payload: cardId
    }
}

function clearMatchedCards() {
    return { type: actions.CLEAR_MATCHED_CARDS };
}

export {
    setDeck,
    incrementCardFlips,
    addToFlippedCards,
    clearFlippedCards,
    addToMatchedCards,
    clearMatchedCards
};