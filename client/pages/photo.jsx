import React from 'react/addons';
import Camera from '../components/camera';
import {RaisedButton} from 'material-ui';

export default class Page extends React.Component {
  screenshot () {
    var screenshot = this.refs.camera.getScreenshot();
    console.log(screenshot);
  }

  render () {
    return (
      <div>
        <Camera ref="camera" sourceQuery={ { facing: 'environment' } } />
        <RaisedButton label="Take Picture" onClick={this.screenshot.bind(this)} />
      </div>
    );
  }
}
