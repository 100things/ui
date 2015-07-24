import React from 'react/addons';
import { RouteHandler } from 'react-router';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();

class Layout extends React.Component {
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  render () {
    return (
      <div>
        <RouteHandler { ...this.props } />
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;
