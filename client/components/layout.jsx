import React from 'react/addons';
import { RouteHandler, Link } from 'react-router';
import { Provider } from 'react-redux';
import { flux } from '../flux';

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Provider store={flux}>
          <Link to='thing'>Add a thing</Link>
          <RouteHandler { ...this.props } />
        </Provider>
      </div>
    );
  }
}

export default Layout;
