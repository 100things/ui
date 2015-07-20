/*global MediaStreamTrack*/

import React from 'react';
import Lodash from 'lodash';

function hasGetUserMedia () {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

class Webcam extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentWillMount () {
    Webcam.mountedInstances.push(this);
  }

  componentDidMount () {
    if (!hasGetUserMedia() || Webcam.userMediaRequested) {
      return;
    }

    navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

    MediaStreamTrack.getSources((sourceInfos) => {
      var videoSources = Lodash.where(sourceInfos, {
        kind: 'video'
      });
      if (!videoSources.length) {
        // TODO: Handle no sources
      }

      var source = Lodash.findWhere(videoSources, this.props.sourceQuery);

      if (!source) {
        source = videoSources.pop();
      }

      var constraints = {
        video: {
          optional: [{sourceId: source.id}]
        }
      };

      navigator.getUserMedia(constraints, function (stream) {
        Webcam.mountedInstances.forEach(function (instance) {
          instance._successCallback(stream);
        });
      }, function (e) {
        Webcam.mountedInstances.forEach(function (instance) {
          instance._errorCallback(e);
        });
      });
    });

    Webcam.userMediaRequested = true;
  }

  componentWillUnmount () {
    if (this.state.hasUserMedia) {
      window.URL.revokeObjectUrl(this.state.src);
    }
  }

  _successCallback (stream) {
    let src = window.URL.createObjectURL(stream);

    this.setState({
      hasUserMedia: true,
      src
    });
  }

  _errorCallback () {
    this.setState({
      src: this.state.src
    });
  }

  getScreenshot () {
    if (!this.state.hasUserMedia) {
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.height = video.clientHeight;
    canvas.width = video.clientWidth;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL('image/webp');
  }

  render () {
    return (
      <video
        autoPlay
        width={this.props.width}
        height={this.props.height}
        src={this.state.src}
        ></video>
    );
  }
}

Webcam.defaultProps = {
  height: 480,
  width: 640
};

Webcam.mountedInstances = [];
Webcam.userMediaRequested = false;

export default Webcam;
