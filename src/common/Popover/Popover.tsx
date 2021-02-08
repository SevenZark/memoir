import React, { FC } from 'react';

// App
import usePopoverStyles from './usePopoverStyles';

const Popover: FC = ({ children }) => {

    const classes = usePopoverStyles();

    return (
        <div className={classes.popoverFrame}>
            <div className={classes.popoverRoot}>
                {children}
            </div>
        </div>
    );
}

export default Popover;