import Alt from 'alt';

import ThingsActions from './actions/things';
import ThingsStore from './stores/things';

export default class Flux extends Alt {
  constructor (config = {}) {
    super(config);

    this.addActions('ThingsActions', ThingsActions);

    this.addStore('ThingsStore', ThingsStore);
  }
}
