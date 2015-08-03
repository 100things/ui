import React from 'react/addons';
import { Link } from 'react-router';

export default class Thing extends React.Component {
  render () {
    return (
      <div>
        <Link to='camera'>To Camera</Link>
      </div>
    );
  }
}
