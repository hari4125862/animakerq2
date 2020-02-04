import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


class Ciphertext extends Component {
constructor(props) {
    super(props);
    var that = this;
    this.state = {shift:"",plain:""}
  }

    render() {
        return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            placeholder="Enter ciphertext"
            value={this.props.cipher}
          />
        </center>
      </div>);
    }
}

export default Ciphertext;
