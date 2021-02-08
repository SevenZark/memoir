import React, { FC } from 'react';
import { Provider } from 'react-redux';

// App
import './reset.css';
import useAppStyles from './useAppStyles';
import TitleBar from './TitleBar/TitleBar';
import PageContent from './PageContent/PageContent';
import store from '@memoir/store/store';

const App: FC = () => {

    const classes = useAppStyles();

    return (
        <Provider store={store}>
            <div className={classes.appRoot}>
                <TitleBar />
                <PageContent />
            </div>
        </Provider>
    );
}

export default App;