import React from 'react/addons';
import List from '../Components/List';

export default class Browse extends React.Component {
  render () {
    return (
      <List {...this.props} />
    );
  }
}
