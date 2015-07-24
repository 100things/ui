import { fetch } from '../api/Things';

export default (alt) => {
  return {
    fetch: {
      remote (state) {
        return fetch(state);
      },
      loading: alt.actions.ThingsActions.fetch,
      success: alt.actions.ThingsActions.success,
      error: alt.actions.ThingsActions.error
    }
  };
};
