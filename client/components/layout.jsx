import React from 'react/addons';
import { RouteHandler, Link } from 'react-router';
import mui from 'material-ui';
import { AppBar, FlatButton, IconButton } from 'material-ui';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';

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
        <AppBar
          iconElementLeft={
            <IconButton
              linkButton={true}
              containerElement={
                <Link to='root' />
              }>
              <HomeIcon />
            </IconButton>
          }
          iconElementRight={
            <FlatButton
              linkButton={true}
              containerElement={
                <Link to='thing' />
              }
              label='Add Item' />
          }
          title='100 Things' />
        <RouteHandler { ...this.props } />
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;
