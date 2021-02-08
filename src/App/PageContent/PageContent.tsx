import React, { FC } from 'react';
import { useSelector } from 'react-redux';

// App
import usePageContentStyles from './usePageContentStyles';
import CardGrid from '@memoir/App/CardGrid/CardGrid';

const PageContent: FC = ({ children }) => {

    const classes = usePageContentStyles();
    const numCardFlips = useSelector(state => state.numCardFlips);

    function instructionText() {
        switch (numCardFlips) {
            case 0: return 'Click any card below';
            case 1: return `Now click any other card. If your cards matched, they\'ll be eliminated.`;
            default: return 'Match all cards to win';
        }
    }

    return (
        <div className={classes.root}>
            <p className={classes.instructions}>
                {instructionText()}
            </p>
            <CardGrid />
        </div>
    );
}

export default PageContent;