import React, {Component} from 'react';
import Plaintext from './components/Plaintext';
import Ciphertext from './components/Ciphertext';
import Shift from './components/Shift';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
constructor(props) {
    super(props);
    var that = this;
    this.state = {shift:"",plain:"",value:""}
  }

  changeShift=(event)=>{
    this.setState({shift: event.target.value});

  }

      changePlane=(event)=>{
        this.setState({plain: event.target.value});
        var input = this.state.plain;
      var result = ""
      for(var i=0;i<this.state.shift;i++)
      {
        var curr = String.fromCharCode(input.charCodeAt(i)+1);
        result = result +curr;
      }
      console.log(result);
        this.setState({
      cipher:result
        })
      }

    render() {
      console.log("values",this.state.shift,this.state.cipher)
        return (
      <div className="container">
          <center><h1>Caesar's Cipher</h1></center>
                  <Shift 
                  changeShift={this.changeShift}
                  value={this.state.shift}></Shift>
          <Paper elevation={10} className="child-container">
                      <Plaintext changePlane={this.changePlane}></Plaintext>
                      <Ciphertext cipher={this.state.cipher}></Ciphertext>
               </Paper>
      </div>);
    }
}

export default Main;