import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui';


export default class Thing extends React.Component {
  render () {
    return (
      <Card>
        <CardMedia overlay={
            <CardTitle title={ this.props.name }/>
          }>
          <img src={ this.props.image } />
        </CardMedia>
      </Card>
    );
  }
}
