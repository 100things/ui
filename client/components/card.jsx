import React from 'react/addons';
import color from 'color';

const styles = {
    color: '#fff',
    ':hover': {
        background: color('#0074d9').lighten(0.2).hexString()
    }
};

@Radium
export default class Card extends React.Component {
  render() {
      return (
          <button style={[styles.base]}>
          Hi!
          </button>
      );
  }
}
