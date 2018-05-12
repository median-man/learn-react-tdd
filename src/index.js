import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reactApp = React.createElement(App);
const rootEl = document.getElementById('root');
ReactDOM.render(reactApp, rootEl);
registerServiceWorker();
