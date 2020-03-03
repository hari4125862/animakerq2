import React , { Component }from 'react';
import './App.css';
import {Link,withRouter,Redirect}  from 'react-router-dom';
//import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form , Card,  Grid, Segment, Radio} from 'semantic-ui-react'
class notAvailable extends Component {
  constructor(props) {
    super(props);
    this.state = {value:"this",login:false, opened: false};
    if(props.location){
      this.path = props.location.pathname;
    } else {
      this.path = "";
    }
    }

   

render() {

  
    return (
      <div>
     hello
  </div>
        );
  }
}

export default notAvailable;