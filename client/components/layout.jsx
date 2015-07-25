import React from 'react/addons';
import { RouteHandler, Link } from 'react-router';
import mui from 'material-ui';
import { AppBar, FlatButton, IconButton, FontIcon } from 'material-ui';

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
            <IconButton tooltip="Sort" disabled={true}>
              <FontIcon className="muidocs-icon-custom-sort"/>
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
