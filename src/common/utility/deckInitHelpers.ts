function createDeck() {

    const setMaster = Array.from(Array(12).keys());
    const createSet = setId =>
        setMaster.map(cardFaceId => (`${cardFaceId}.${setId}`));

    const setA = createSet('a');
    const setB = createSet('b');

    // Because we have one pair for each card
    return [...setA, ...setB];
}

function shuffleDeck(deckToShuffle) {
    return deckToShuffle.sort(() => Math.random() - 0.5);
}

export { createDeck, shuffleDeck };