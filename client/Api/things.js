// Polyfill for promises in browser
require('es6-promise').polyfill();

import request from 'superagent';

export default {
  fetch: () => new Promise((resolve, reject) => {
    request
    .get('/api/things')
    .end((err, res) => {
      console.log(res);
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  })
};
