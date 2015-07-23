import React from 'react/addons';
import Router from 'react-router';
import Routes from './Routes';

const rootEl = document.querySelector('.content');

Router.run(Routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler {...state} />, rootEl);
});
