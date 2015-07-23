import React from 'react/addons';
import List from './List';

export default class Browse extends React.Component {
  render () {
    return (
      <List {...this.props} />
    );
  }
}
