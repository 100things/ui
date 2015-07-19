export default class ThingsStore {
  constructor (actions) {
    this.bindActions(actions);
  }

  init (data) {
    this.setState(data || { things: [] });
  }

  create (name, image) {
    const things = this.things;

    this.setState({
      things: things.concat({
        name: name,
        image: image
      })
    });
  }

  update ({id, name}) {
    const things = this.things;

    things[id].name = name;

    this.setState({things});
  }

  remove (id) {
    const things = this.things;

    this.setState({
      things: things.slice(0, id).concat(things.slice(id + 1))
    });
  }
}
