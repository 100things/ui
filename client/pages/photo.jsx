import React from 'react/addons';
import Camera from '../components/camera';

export default class Page extends React.Component {
  screenshot () {
    var screenshot = this.refs.camera.getScreenshot();
    console.log(screenshot);
  }

  render () {
    return (
      <div>
        <Camera ref='camera' sourceQuery={ { facing: 'environment' } } />
        <button onClick={ this.screenshot.bind(this) }>Take Picture</button>
      </div>
    );
  }
}
