import { createUseStyles } from 'react-jss';

const useCardGridStyles = createUseStyles({
    cardGridRoot: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 16.7%)',
        gridTemplateRows: 'repeat(4, auto)',
        margin: '0 10%',
        padding: 30
    }
});

export default useCardGridStyles;