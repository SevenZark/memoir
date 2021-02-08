import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

// App
import useYouWonStyles from './useYouWonStyles';
import Popover from '@memoir/common/Popover/Popover';
import { clearMatchedCards, setDeck } from '@memoir/store/actionCreators';
import { createDeck, shuffleDeck } from '@memoir/common/utility/deckInitHelpers';

const YouWon: FC = () => {

    const dispatch = useDispatch();
    const classes = useYouWonStyles();

    function handlePlayAgain() {
        dispatch(clearMatchedCards());
        dispatch(setDeck(shuffleDeck(createDeck())));
    }

    return (
        <Popover>
            <div className={classes.root}>
                <p>You won! Good job!</p>
                <button
                    className={classes.button}
                    onClick={handlePlayAgain}
                >
                    Play Again
                </button>
            </div>
        </Popover>
    );
}

export default YouWon