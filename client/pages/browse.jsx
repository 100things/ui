import React from 'react/addons';
import List from '../components/list';
import AltContainer from 'alt/AltContainer';

export default class Browse extends React.Component {
  render () {
    return (
      <AltContainer
        actions={ { actions: this.props.flux.actions.ThingsActions } }
        store={ this.props.flux.stores.ThingsStore }
        flux={ this.props.flux }>

        <List {...this.props} />

      </AltContainer>
    );
  }
}
