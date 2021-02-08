import { createUseStyles } from 'react-jss';

const useTitleBarStyles = createUseStyles({
    root: {
        background: '#eee',
        borderBottom: '1px solid #ccc',
        color: '#999',
        marginBottom: 10,
        padding: 5,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

export default useTitleBarStyles;