import React from 'react/addons';
import { RouteHandler, Link } from 'react-router';

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Link to='thing'>Add a thing</Link>
        <RouteHandler { ...this.props } />
      </div>
    );
  }
}

export default Layout;
