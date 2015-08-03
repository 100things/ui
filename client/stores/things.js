export default class ThingsStore {
  constructor () {
    this.bindActions(this.alt.getActions('ThingsActions'));

    this.things = [];
  }

  onUpdate (things) {
    this.setState({
      things: things,
      loading: false
    });
  }
}
