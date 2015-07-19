export const storageName = 'kanban_storage';

export const storage = {
  get: function (key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  },

  set: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export function getInitialData (name) {
  var data = storage.get(name);
  return data && data[name];
}
