import Alt from 'alt';

import ThingsActions from './actions/things';
import RequestActions from './actions/request';
import CameraActions from './actions/camera';
import ThingsStore from './stores/things';
import CameraStore from './stores/camera';

export default class Flux extends Alt {
  constructor (config = {}) {
    super(config);
    this.addActions('ThingsActions', ThingsActions);
    this.addActions('RequestActions', RequestActions);
    this.addActions('CameraActions', CameraActions);
    this.addStore('ThingsStore', ThingsStore);
    this.addStore('CameraStore', CameraStore);
  }
}
