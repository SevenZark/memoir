import { createDeck } from './deckInitHelpers';

describe('createDeck', () => {
    it('Creates a correct deck of cards', () => {

        const deckShouldBe = [
            '0.a',
            '0.b',
            '1.a',
            '1.b',
            '10.a',
            '10.b',
            '11.a',
            '11.b',
            '2.a',
            '2.b',
            '3.a',
            '3.b',
            '4.a',
            '4.b',
            '5.a',
            '5.b',
            '6.a',
            '6.b',
            '7.a',
            '7.b',
            '8.a',
            '8.b',
            '9.a',
            '9.b',
       ];

        const generatedDeck = createDeck();

        expect(generatedDeck.sort()).toEqual(deckShouldBe);
    });
}) ;