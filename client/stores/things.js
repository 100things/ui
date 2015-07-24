import source from '../sources/things';

export default class ThingsStore {
  constructor () {
    this.bindActions(this.alt.getActions('ThingsActions'));
    this.registerAsync(source(this.alt));

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

  onFetch () {
    this.setState({
      error: null,
      loading: true
    });
  }

  onError (err) {
    this.setState({
      error: err.message || err.toString(),
      loading: false
    });
  }
}
