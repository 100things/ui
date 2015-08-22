import React from 'react/addons';
import { Link } from 'react-router';
import AltContainer from 'alt/AltContainer';
import Thing from '../components/thing';

export default class CreateThing extends React.Component {

  constructor (props) {
    super(props);
  }

  save () {
    this.props.flux.actions.ThingActions.save(
      this.props.flux.stores.ThingStore.getState().thing
    );

    this.clear();
  }

  clear () {
    this.props.flux.actions.ThingActions.clear();
  }

  update (thing) {
    this.props.flux.actions.ThingActions.update(thing);
  }

  render () {
    return (
      <div>
        <Link to='root'>To List</Link>
        <AltContainer
          store={ this.props.flux.stores.ThingStore }
          actions={ {
            actions: this.props.flux.actions.ThingActions
          } }
          flux={ this.props.flux }>

          <Thing save={ this.update.bind(this) }/>

        </AltContainer>
        <button onClick={ this.save.bind(this) }>Create Thing</button>
        <button onClick={ this.clear.bind(this) }>Clear</button>
      </div>
    );
  }
}
