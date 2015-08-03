import request from 'axios';
export default {
  fetch: () => request.get('/api/things')
};
