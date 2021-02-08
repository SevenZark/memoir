import React, { FC } from 'react';

// App
import useTitleBarStyles from './useTitleBarStyles' 

const TitleBar: FC = () => { 

    const classes = useTitleBarStyles();

    return (<header className={classes.root}>Memoir!</header>) 
}

export default TitleBar;