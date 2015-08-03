import React from 'react/addons';
import Camera from '../components/camera';
import { Link } from 'react-router';

export default class Page extends React.Component {
  constructor (props) {
     super(props);
     this.state = {
       image: null
     };
   }

  screenshot () {
    let image = this.refs.camera.getScreenshot();
    this.setState({
      image
    });
  }

  keep () {
    this.props.flux.actions.ThingActions.picture(this.state.image);
  }

  clear () {
    this.setState({
      image: null
    });
  }

  render () {
    let photo;
    if (this.state.image) {
      photo = (
        <div>
          <img src={ this.state.image } />
          <Link to='thing' onClick={ this.keep.bind(this) }>Keep It</Link>
          <button onClick={ this.clear.bind(this) }>Take Another</button>
        </div>
      );
    } else {
      photo = (
        <div>
          <Camera ref='camera' sourceQuery={ { facing: 'environment' } } />
          <button onClick={ this.screenshot.bind(this) }>Take Picture</button>
        </div>
      );
    }
    return photo;
  }
}
