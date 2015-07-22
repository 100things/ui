import React from 'react';

import mui from 'material-ui';
import {Card, CardMedia, CardTitle} from 'material-ui';
const ThemeManager = new mui.Styles.ThemeManager();


class Thing extends React.Component {

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render () {
    return (
      <Card>
        <CardMedia overlay={<CardTitle title={this.props.name}/>}>
          <img src={this.props.image} />
        </CardMedia>
      </Card>
    );
  }
}

Thing.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Thing;
