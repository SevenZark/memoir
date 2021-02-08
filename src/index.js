import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App/App';

const rootElement = document.getElementById('root');
rootElement ? ReactDOM.render(<App />, rootElement) : false;