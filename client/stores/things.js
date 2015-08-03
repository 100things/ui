export default class ThingsStore {
  constructor () {
    this.bindActions(this.alt.getActions('ThingsActions'));

    this.things = [];
    this.loading = false;
    this.error = '';
  }

  onUpdate (things) {
    this.setState({
      things: things,
      loading: false
    });
  }

  onRequest () {
    this.setState({
      error: null,
      loading: true
    });
  }

  onFail (err) {
    this.setState({
      error: err.message || err.toString(),
      loading: false
    });
  }
}
