// Polyfill for promises in browser
require('es6-promise').polyfill();

import request from 'superagent';

export default {
  fetch: () => new Promise((resolve, reject) => {
    request
    .get('http://localhost:3000/api/things')
    .end((err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res.body);
    });
  })
};
