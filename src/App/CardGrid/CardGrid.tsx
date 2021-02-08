import React, { FC } from 'react';
import { useSelector } from 'react-redux';

// App
import useCardGridStyles from './useCardGridStyles';
import useDealDeck from './useDealDeck';
import useHandleCardFlips from './useHandleCardFlips';
import Card from './Card/Card';
import Popover from '@memoir/common/Popover/Popover';
import YouWon from './YouWon/YouWon';

const CardGrid: FC = () => {

    const classes = useCardGridStyles();
    const deck = useSelector(state => state.deck);
    const flippedCards = useSelector(state => state.flippedCards);
    const matchedCards = useSelector(state => state.matchedCards);

    useDealDeck();
    useHandleCardFlips();

    return (
        <div className={classes.cardGridRoot}>

            {flippedCards.length === 2 &&
                <Popover>Remember these cards!</Popover>
            }

            {matchedCards.length === 12 && <YouWon />}

            {deck.map((card, index) => (
                <Card
                    key={index}
                    cardId={card}
                />
            ))}
        </div>
    )
}

export default CardGrid;