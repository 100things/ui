import React from 'react';
import Flux from './flux';
import router from './router';

const flux = new Flux();

const rootEl = document.querySelector('.content');
router.run((Handler, route) => {
  React.render(<Handler route={route} flux={flux} />, rootEl);
});
