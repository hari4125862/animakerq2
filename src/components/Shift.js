import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class Shift extends Component {
constructor(props) {
    super(props);
    var that = this;
    this.state = {value:""}
  }



  render() {
    return (
      <div className="shift">
        <center>
          <Select onChange={this.props.changeShift} value={this.props.value}
            autoWidth={true}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </Select>
        </center>
      </div>
    );
  }
  
};


export default Shift;