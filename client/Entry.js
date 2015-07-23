import React from 'react/addons';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Router from './Router';

const rootEl = document.querySelector('.content');
const history = new BrowserHistory();

React.render(<Router history={history} />, rootEl);
