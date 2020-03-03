import React , { Component }from 'react';
import './App.css';
import {Link,withRouter,Redirect}  from 'react-router-dom';
import {logout} from "./Api";
import {call} from "./Api";
import {statusCheck} from "./Api";
import swal from 'sweetalert';

//import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form , Card,  Grid, Segment, Radio, Dropdown} from 'semantic-ui-react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value:"this",login:false, opened: false,phone:"",gender:"Male",lang:"Generic",langpara:"unknown"};
    if(props.location){
      this.path = props.location.pathname;
    } else {
      this.path = "";
    }

    }

    componentWillMount(){
       statusCheck()
          .then((response) => {
              console.log("hi",response)
              this.setState({
                status: response.status
              })
          })
    }

    handleChange = (e, { value ,label}) =>{
      console.log("label",label);
       this.setState({ 
      value:value ,
      gender:label
    })
    }
    
    handleChangeLanguage = (e, { value,label }) =>{
console.log("label",label);
       this.setState({ 
      langpara:value ,
      lang:label
    })
} 


    submit=async(e)=>{
      //alert("Initiate call");
      console.log("e",e.target.value);
      console.log("e1",this.state.phone);
      console.log("e1",this.state.gender);
      console.log("e2",this.state.langpara);
      // if(this.state.langpara=="Kannada"){
      //   var langpara="ka";
      // }
      // else if(this.state.langpara=="English")
      // {
      //   var langpara="en";
      // } else if(this.state.langpara=="Hindi")
      // {
      //   var langpara="hi";
      // }else if(this.state.langpara=="Generic")
      // {
      //   var langpara="gn";
      // }

      if(this.state.gender=="Female"){
        var gender="f";
      }
      else if(this.state.gender=="Male")
      {
        var gender="m";
      }
      var urlRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g
      var res = this.state.phone.match(urlRegex);
      if(res){
        console.log("valid data");
        swal({
        title: "Call Connected!",
        icon: "success",
        button: "Okay!",
        }).then(() => {
        this.setState({
          phone:""
        })
      });
        
        //await call(this.state.phone,gender,"");
       await call(this.state.phone,gender,"",this.state.langpara);
        
        
      }
      else{
        alert("Please enter valid data");
      }
    
      //console.log("res",res);     
    }

      logOut = async () => {
        this.setState({status:false});
     var res = await logout(); 
     console.log("hihihi",this.state.status);
    if(res.msg){
          alert("Successfully Logged out");
           
        }

           
           
        };



          
render() {
    

  var {login,status} = this.state;
  var {location} = this.props;
      console.log("hihi",status);
  if(this.state.status==false ){
      return <Redirect to={{pathname:'/login',state:{from:location.pathname}}} />;
    }

      var style2={
        fontSize: "35px",
        fontWeight: "bold",
        paddingTop: "13px"
      };

      var style3={
        height: "35px",
        paddingLeft: "55px"
      };

      const languageOption = [
            { key: 'ka', value: 'Kannada', flag: '', text: 'Kannada'},
            { key: 'en', value: 'English', flag: '', text: 'English' },
            { key: 'hi', value: 'Hindi', flag: '', text: 'Hindi' },
            { key: 'Gn', value: 'Generic', flag: '', text: 'Generic'}
            ]


          var {phone} = this.state;

    return (

      <div>
      <div className="loginheader loginheader1">
      <div className="login">
      <img className="Mainlogo" style={style3} src={require('./logo1.png')}/>
      <div className="headerName" style={style2}>intentico</div>
      </div>
      <div className="logout" onClick={this.logOut}>
      <i className="user icon"></i>
      Logout</div>
      </div>
      <h1> Instant Service Feedback Call</h1>

      <Grid centered columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Segment>
           <Form>      
            <Form.Field>
              <label>Phone Number</label>
              <input placeholder='Phone Number'  type="tel" name="phone" pattern="^[0][1-9]\d{9}$|^[1-9]\d{9}$" required value={this.state.phone}
              onChange={e=>{
                this.setState({phone:e.target.value})
              }}
            />
            </Form.Field>

            <Form.Field>
            <label>Language</label>
            <Radio
              label='unknown'
              name='radioGroupLang'
              value='unknown'
              checked={this.state.langpara === 'unknown'}
              onChange={this.handleChangeLanguage}
            />
          </Form.Field>

            <Form.Field>
            <Radio
              label='Kannada'
              name='radioGroupLang'
              value='kn-IN'
              checked={this.state.langpara === 'kn-IN'}
              onChange={this.handleChangeLanguage}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='English'
              name='radioGroupLang'
              value='en-IN'
              checked={this.state.langpara === 'en-IN'}
              onChange={this.handleChangeLanguage}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Hindi'
              name='radioGroupLang'
              value='hi-IN'
              checked={this.state.langpara === 'hi-IN'}
              onChange={this.handleChangeLanguage}
            />
          </Form.Field>
         
             <Form.Field>
             <label>Gender</label>
            <Radio
              label='Male'
              name='radioGroup'
              value='this'
              checked={this.state.value === 'this'}
              onChange={this.handleChange}

            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Female'
              name='radioGroup'
              value='that'
              checked={this.state.value === 'that'}
              onChange={this.handleChange}
            />
          </Form.Field>
      
            <Button type='phone' onClick={this.submit}><span>Call customer</span></Button>
           </Form>
          </Segment>
        </Grid.Column>
     </Grid.Row>
     </Grid>  
  </div>
        );
  }
}

export default App;