import React, { Component } from "react";
import fetchIntercept from "fetch-intercept";
import { HashRouter, Route, Redirect, withRouter } from "react-router-dom";
import App from "./App";
import Main from "./App";
import Login from "./login";
import notAvailable from "./notAvailable";
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { authRedir: true };
  }


  render() { 
    var redirect = null;
    var { authRedir } = this.state;
    var { location } = this.props;
    location = location || {};
    console.log("routes match", this.props.location);
        console.log("authRedir",authRedir);



    return (
      <div>
        <Route path="/" exact component={App}  />
        <Route path="/main" exact component={Main}  />
        <Route path="/login" exact component={Login} />
        <Route path="/notAvailable" exact component={notAvailable} />

        {redirect}
      </div>
    );
  }
}

const RoutesAltered = withRouter(props => <Routes {...props} />);

export default props => (
  <HashRouter>
    <RoutesAltered />
  </HashRouter>
);
