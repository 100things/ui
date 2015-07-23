import React from 'react/addons';
import { RouteHandler } from 'react-router';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();

var data = {
  things: [
    { id: 1, name: 'Thing 1', image: 'http://placekitten.com/g/601/300' },
    { id: 2, name: 'Thing 2', image: 'http://placekitten.com/g/602/300' },
    { id: 3, name: 'Thing 3', image: 'http://placekitten.com/g/603/300' }
  ]
};

class Layout extends React.Component {
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  render () {
    return (
      <div>
        <RouteHandler { ...this.props } things={ data.things } />
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;
