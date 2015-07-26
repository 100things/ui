import React from 'react/addons';
import { Link } from 'react-router';
import { TextField, RaisedButton } from 'material-ui';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';

export default class Thing extends React.Component {
  render () {
    return (
      <div>
        <TextField
          hintText="eg. Lamp!"
          floatingLabelText="What is it?" />
        <br />
        <TextField
          multiline={true}
          hintText="eg. Living room, need"
          floatingLabelText="Add some tags!" />
        <br />
        <RaisedButton
          linkButton={true}
          containerElement={
            <Link to='camera' />
          }
          primary={true}
          label="Add a Picture">
          <HomeIcon />
        </RaisedButton>
      </div>
    );
  }
}
