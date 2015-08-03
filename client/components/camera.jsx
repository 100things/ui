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

    componentDidMount () {
      var self = this;
      if (!hasGetUserMedia()) {
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

        navigator.getUserMedia(constraints, (stream) => {
          self._successCallback(stream);
        }, (e) => {
          self._errorCallback(e);
        });
      });
    }

    componentWillUnmount () {
      if (this.state.hasUserMedia) {
        window.URL.revokeObjectURL(this.state.src);
      }

      if (this.state.stream) {
        this.state.stream.stop();
      }
    }

    _successCallback (stream) {
      let src = window.URL.createObjectURL(stream);

      this.setState({
        hasUserMedia: true,
        stream,
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

      var video = this.refs.video.getDOMNode();
      var canvas = document.createElement('canvas');
      var multiplier = (this.props.imageWidth ||
         this.props.width) / this.props.width;

      canvas.height = video.clientHeight * multiplier;
      canvas.width = video.clientWidth * multiplier;

      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      return canvas.toDataURL(this.props.imageType);
    }

    render () {
      return (
        <video
          autoPlay
          height={this.props.height}
          ref='video'
          src={this.state.src}
          width={this.props.width}
          ></video>
      );
    }
  }

  Webcam.defaultProps = {
    height: 480,
    width: 640,
    imageType: 'image/png',
    imageWidth: 320
  };

  export default Webcam;
