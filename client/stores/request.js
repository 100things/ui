export default class ThingsStore {
  constructor () {
    this.bindActions(this.alt.getActions('RequestActions'));

    this.loading = false;
    this.error = '';
  }

  onStart () {
    this.setState({
      error: null,
      loading: true
    });
  }

  onSuccesss () {
    this.setState({
      error: null,
      loading: false
    });
  }

  onFail (err) {
    this.setState({
      error: err.message || err.toString(),
      loading: false
    });
  }
}
