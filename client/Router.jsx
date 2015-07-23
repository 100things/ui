import React from 'react/addons';
import Routes from './Routes';
import {Router} from 'react-router';

export default class Router extends React.Component {
  render () {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}
