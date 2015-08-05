require('babel/polyfill');

import React from 'react';
import router from './router';

const rootEl = document.querySelector('.content');
router.run((Handler, route) => {
  React.render(<Handler route={route} />, rootEl);
});
