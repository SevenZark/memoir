import { createUseStyles } from 'react-jss';

// App
import theme from '@memoir/theme/theme';

const useAppStyles = createUseStyles({
    '@font-face': {
        fontFamily: 'Overpass',
        fontStyle: 'normal',
        fontWeight: 100,
        src: 'url(https://fonts.gstatic.com/s/overpass/v5/qFdB35WCmI96Ajtm81nGY9nqxzUKg1o.woff2) format("woff2")'
    },
    appRoot: {
        color: theme.palette.text,
        fontFamily: 'Overpass'
    }
});

export default useAppStyles;