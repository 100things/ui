import React from 'react/addons';
import { TextField } from 'material-ui';

export default class Thing extends React.Component {
  render () {
    return (
      <TextField
        hintText="Pants!"
        floatingLabelText="What is it?" />
    );
  }
}
