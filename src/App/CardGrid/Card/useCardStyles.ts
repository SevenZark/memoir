import { createUseStyles } from 'react-jss';

// App
import theme from '@memoir/theme/theme';

const primaryLight = theme.palette.primary.light;
const primaryDark = theme.palette.primary.dark;

const useCardStyles = createUseStyles({
    cardRoot: {
        margin: '1em',
    },
    cardImage: {
        display: 'block',
        height: '100%',
        width: '100%'
    },
    cardLink: props => ({
        background: props.isMatchedCard ? primaryDark :  primaryLight,
        border: '0.25em solid transparent',
        cursor: props.isClickable ? 'pointer' : 'default',
        display: 'block',
        height: props.height || undefined,
        textDecoration: 'none',
        '&:hover': props => ({
            border: props.isClickable 
                ? `0.25em solid ${primaryDark}`
                : undefined
        })
    })
});

export default useCardStyles;