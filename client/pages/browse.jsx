import React from 'react/addons';
import List from '../components/list';
import Counter from '../components/counter';
import AltContainer from 'alt/AltContainer';

export default class Browse extends React.Component {
  render () {
    return (
      <div>
        <AltContainer
          store={ this.props.flux.stores.ThingsStore }
        >
          <Counter />
        </AltContainer>
        <AltContainer
          actions={ { actions: this.props.flux.actions.ThingsActions } }
          store={ this.props.flux.stores.ThingsStore }
          flux={ this.props.flux }
        >
          <List {...this.props} />
        </AltContainer>
      </div>
    );
  }
}
