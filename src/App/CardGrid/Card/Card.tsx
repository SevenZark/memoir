import React, {
    useRef,
    FC
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// App
import { addToFlippedCards, incrementCardFlips } from '@memoir/store/actionCreators';
import useCardStyles from './useCardStyles';
import useGetHeightEqualToWidth from './useGetHeightEqualToWidth';
import useCalcFaceUp from './useCalcFaceUp';

type Props = { cardId: string }

const Card: FC<Props> = ({ cardId }) => {

    const cardFaceId = cardId.split('.')[0];
    const imageFilename = `images/memoir-card-${cardFaceId}.svg`;
    const linkEl = useRef();

    const height = useGetHeightEqualToWidth(linkEl);
    const isFaceUp = useCalcFaceUp(cardId);
    const twoCardsAreFlipped = 
        useSelector(state => state.flippedCards).length === 2;
    const matchedCards = useSelector(state => state.matchedCards);
    const isMatchedCard = matchedCards.includes(cardFaceId);
    const isClickable = !isMatchedCard && !isFaceUp && !twoCardsAreFlipped;

    const classes = useCardStyles({ height, isClickable, isMatchedCard });
    const dispatch = useDispatch();

    const handleClick = (e) => {

        e.preventDefault();

        if (isClickable) {
            dispatch(incrementCardFlips());
            dispatch(addToFlippedCards(cardId));
        }
    }

    return (
        <div className={classes.cardRoot}>
            <a
                className={classes.cardLink}
                data-testid={`card-${cardId}`}
                href="#"
                onClick={handleClick}
                ref={linkEl}
            >

                {isFaceUp && (
                    <img
                        className={classes.cardImage}
                        src={imageFilename}
                    />
                )}
            </a>
        </div>
    );
}

export default Card;