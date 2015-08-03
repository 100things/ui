import Alt from 'alt';

import ThingsActions from './actions/things';
import ThingActions from './actions/thing';
import RequestActions from './actions/request';
import RequestStore from './stores/request';
import ThingsStore from './stores/things';
import ThingStore from './stores/thing';

export default class Flux extends Alt {
  constructor (config = {}) {
    super(config);
    this.addActions('ThingsActions', ThingsActions);
    this.addActions('ThingActions', ThingActions);
    this.addActions('RequestActions', RequestActions);
    this.addStore('RequestStore', RequestStore);
    this.addStore('ThingsStore', ThingsStore);
    this.addStore('ThingStore', ThingStore);
  }
}
