import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid,Form,Segment,Button,Icon,Dropdown } from 'semantic-ui-react';
import {Redirect}  from 'react-router-dom';
import {login} from './Api';
import "./project.css";
import swal from 'sweetalert';

const Row = Grid.Row;
const Column = Grid.Column;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {user:"",password:"",dealer:"",loading:false,redirect:false,
};
		console.log('login appeared',props);
	}

	redirectSuccessfull = () =>{
		var {location} = this.props;
		console.log("Location",location);
		if(location && location.state && location.state.from){
			this.setState({redirect:location.state.from});
			console.log("redirect",location.state.from);
		} else {
			this.setState({redirect:'/main'});
						console.log("redirect","/main");

		}
		
	};

	login = async (e) => {
		e.preventDefault();
		var {user,password,dealer} = this.state;
		console.log("dealer",dealer);
		var res = await login(user,password);
		console.log("res",res);
		if(res.status==true){
			this.setState({loading:true});
			//localStorage.setItem('myData', "logged_in");

			swal({
		  		title: "Welcome "+ user,
		  		text: res.msg,
		  		icon: "success",
		  		button: "Okay!",
				})
			this.redirectSuccessfull();
			}
		else{
			//alert("Please enter a valid username or password");
					swal({
					  title: res.msg,
					  icon: "warning",
					  button: "Okay!",
					})
		}
	};

	handleChange = (_e, { value }) => this.setState({ dealer:value });

	render() {
		var style1={
			width:"444px",
			paddingTop: "142px"
		}

		 var style2={
        	fontSize: "27px",
    		fontWeight: "bold",
    		paddingTop: "13px"
  		};

  	 	var style3={
       		height: "35px",
    		paddingLeft: "55px"
  		};

	   	var style4={
	       height: "35px",
	    	width: "100%"
	  	};

	   	var style5={
	       minHeight: "100%"
	   
	  	};

	  var style6={		
		height: "35px",
    	paddingLeft: "25px",
    	paddingBottom: "7px"

	  };

  const countryOptions = [
  { key: 'rr', value: 'Solar TVS - RR Nagar', flag: '', text: 'Solar TVS - RR Nagar'},
  { key: 'hr', value: 'Solar TVS -  Hosur ', flag: '', text: 'Solar TVS -  Hosur ' },
  { key: 'mr', value: 'Solar TVS -  Mysuru Road', flag: '', text: 'Solar TVS -  Mysuru Road' },
 
]

		var {user,password,loading,redirect,dealer} = this.state;
		var {location} = this.props;
		if(redirect){
			return <Redirect to={{
				pathname:redirect
			}} />


		}
		return (
			<div>
				<div className="loginheader">
					<img className="Mainlogo" style={style3} src={require('./logo1.png')}/>
					<div className="headerName" style={style2}>intentico</div>
				</div>
				<div style={style5} className="ui aligned center aligned grid">
  					<div className="column" style={style1}>
    				<h2 className="ui image header">
	      				<div className="content">
	      				<img className="tvslogo" style={style6} src={require('./tvsLogo.png')}/>
	        				Login
	      				</div>
    				</h2>
    			<form onSubmit={this.login} className="ui large form">
        			<div className="field">
         				<div className="ui left icon input">
        					<i className="user icon"></i>
							<Dropdown
						    placeholder='Select Dealer'
						    fluid
						    search
						    selection
						    required
						    options={countryOptions}
						    onChange={this.handleChange}
						  />
	  					</div>
					</div>
			        <div className="field">
			          <div className="ui left icon input">
			            <i className="user icon"></i>
			            <input type="text" name="username" placeholder="Username" disabled={loading} value={user} onChange={(e)=>{this.setState({user:e.target.value})}}/>
			          </div>
			        </div>
			        <div className="field">
			          <div className="ui left icon input">
			            <i className="lock icon"></i>
			            <input type="password" name="password" placeholder="Password" disabled={loading} value={password} onChange={(e) => {this.setState({password:e.target.value})}}/>
			          </div>
			        </div>
		

	        		<button style={style4} className="ui fluid large teal submit button" loading={loading}><span>Login</span></button>

	      			<div className="ui error message"></div>

    			</form>

    
  </div>
</div>
</div>
				);
	}
}

export default Login;