import { read, create, update, del } from '../api/things';

export default (alt) => {
  return {
    read: {
      remote () {
        return read().then(res => res.data);
      },
      loading: alt.actions.ThingsActions.request,
      success: alt.actions.ThingsActions.response,
      error: alt.actions.ThingsActions.error
    },

    create: {
      remote (state, thing) {
        return create(thing).then(res => res.data);
      },
      loading: alt.actions.ThingsActions.request,
      success: alt.actions.ThingsActions.response,
      error: alt.actions.ThingsActions.error
    },

    update: {
      remote (state, thing) {
        return update(thing).then(res => res.data);
      },
      loading: alt.actions.ThingsActions.request,
      success: alt.actions.ThingsActions.response,
      error: alt.actions.ThingsActions.error
    },

    delete: {
      remote (state, thing) {
        return del(thing).then(res => res.data);
      },
      loading: alt.actions.ThingsActions.request,
      success: alt.actions.ThingsActions.response,
      error: alt.actions.ThingsActions.error
    }
  };
};
