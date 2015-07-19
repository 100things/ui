import alt from '../alt';
import ThingsActions from '../actions/Things';

class ThingsStore {
  constructor () {
    this.bindActions(ThingsActions);
  }

  init (data) {
    this.setState(data || { things: [] });
  }

  create (name) {
    const things = this.things;

    this.setState({
      things: things.concat({
        name: name
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

export default alt.createStore(ThingsStore, 'ThingsStore');
