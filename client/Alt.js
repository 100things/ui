import Alt from 'alt';

import ThingsActions from './actions/Things';
import ThingsStore from './stores/Things';

export default class Flux extends Alt {
  constructor (config = {}) {
    super(config);

    this.addActions('ThingsActions', ThingsActions);

    this.addStore('ThingsStore', ThingsStore);
  }
}
