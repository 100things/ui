export default class ThingStore {
  constructor () {
    this.bindActions(this.alt.getActions('ThingActions'));
    this.thing = {};
  }

  onPicture (image) {
    this.setState({
      thing: {
        ...this.thing,
        image
      }
    });
  }

  onUpdate (thing) {
    this.setState({ thing });
  }

  onClear () {
    this.setState({
      thing: {}
    });
  }

}
