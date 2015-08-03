import React from 'react/addons';
import { Link } from 'react-router';
import addChangeHandler from '../decorators/change-handler';

@addChangeHandler
export default class Thing extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
    this.actions = props.flux.actions.ThingsActions;
    this.store = props.flux.stores.CameraStore;
  }

  create () {
    this.actions.create(this.state);
  }

  render () {
    var picture = this.store.getState().picture;

    return (
      <div>
        <label>Name:
          <input
            type='text'
            value={this.state.name}
            onChange={this.onChangeOf.bind(this, 'name')} />
        </label>
        { picture ? <img src={ picture } /> : <Link to='camera'>To Camera</Link> }
        <button onClick={this.create.bind(this)}>Create Thing</button>
      </div>
    );
  }
}
