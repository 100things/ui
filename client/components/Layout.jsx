import React from 'react/addons';
import RouteHandler from 'react-router';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();

var data = {
  things: [
    { id: 1, name: 'Thing 1', image: 'http://placekitten.com/g/600/300' },
    { id: 2, name: 'Thing 2', image: 'http://placekitten.com/g/600/300' },
    { id: 3, name: 'Thing 3', image: 'http://placekitten.com/g/600/300' }
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
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;
