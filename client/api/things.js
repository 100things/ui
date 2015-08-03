import request from 'axios';

const api = '/api/things';

export default {
  read: () => request.get(api),
  create: data => request.post(api, data),
  update: data => request.put(`${api}/${data.id}`, data),
  del: data => request.delete(`${api}/${data.id}`)
};
