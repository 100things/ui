import { fetch } from '../api/things';

export default (alt) => {
  return {
    fetch: {
      remote (state) {
        return fetch(state);
      },
      loading: alt.actions.ThingsActions.fetch,
      success: alt.actions.ThingsActions.update,
      error: alt.actions.ThingsActions.error
    }
  };
};
