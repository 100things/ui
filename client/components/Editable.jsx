import React from 'react/addons';

export default class Editable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edited: false
    };
  }

  render() {
    var {value, onEdit, ...props} = this.props;
    var edited = this.state.edited;

    return (
      <div {...props}>
        {
          edited ?
          <input type="text"
            defaultValue={value}
            onBlur={(e) => this.finishEdit(e)}
            onKeyPress={(e) => this.checkEnter(e)} />
          : <span onClick={() => this.edit()}>{value}</span>
        }
      </div>
    );
  }

  edit() {
    this.setState({
      edited: true
    });
  }

  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    this.props.onEdit(e.target.value);

    this.setState({
      edited: false
    });
  }
}
