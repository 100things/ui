import React from 'react/addons';
import List from './List';
import Camera from './Camera';

import mui from 'material-ui';
import {RaisedButton} from 'material-ui';
const ThemeManager = new mui.Styles.ThemeManager();

var data = {
  things: [
    { id: 1, name: 'Thing 1', image: 'http://placekitten.com/g/600/300' },
    { id: 2, name: 'Thing 2', image: 'http://placekitten.com/g/600/300' },
    { id: 3, name: 'Thing 3', image: 'http://placekitten.com/g/600/300' }
  ]
};

class Page extends React.Component {
  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  screenshot () {
    var screenshot = this.refs.camera.getScreenshot();
    console.log(screenshot);
  }

  render () {
    return (
      <div>
        <Camera ref="camera" sourceQuery={ { facing: 'environment' } } />
        <RaisedButton label="Take Picture" onClick={this.screenshot.bind(this)} />
        <List things={data.things} />
      </div>
    );
  }
}

Page.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Page;
