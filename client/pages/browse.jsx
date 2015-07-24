import React from 'react/addons';
import List from '../components/list';

export default class Browse extends React.Component {
  render () {
    return (
      <List {...this.props} />
    );
  }
}
