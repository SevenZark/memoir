import { createUseStyles } from 'react-jss';

// App
import theme from '@memoir/theme/theme'

const usePopoverStyles = createUseStyles({
    popoverFrame: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '2em',
        left: 0,
        width: '100vw'
    },
    popoverRoot: {
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '1em',
        boxShadow: theme.boxShadow,
        padding: '1em',
    },
});

export default usePopoverStyles;