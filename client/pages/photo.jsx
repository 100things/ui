import React from 'react/addons';
import Camera from '../components/camera';

export default class Page extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.actions = props.flux.actions.CameraActions;
  }
  
  screenshot () {
    var screenshot = this.refs.camera.getScreenshot();
    this.actions.picture(screenshot);
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
