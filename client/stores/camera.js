export default class ThingsStore {
  constructor () {
    this.bindActions(this.alt.getActions('CameraActions'));
    this.picture = '';
  }

  onPicture (picture) {
    this.setState({ picture });
  }
}
