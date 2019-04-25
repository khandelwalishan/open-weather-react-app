import React, { Component } from 'react'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import PropTypes from 'prop-types';



export default class App extends Component {
    constructor(props){
      super(props);
      this.state={
        username:"",
        emailId:"",
        password:"",
       isLogin:false
      };
      this.check = this.check.bind(this);
      this.hLogin = this.hLogin.bind(this);

      this.hSignUp = this.hSignUp.bind(this);



    }



hLogin= ()=> {    
    alert("hlogin")
      {this.setState({isLogin:true})};
     };
check(){
   if(this.state.isLogin)
   return <Login/>
   else
   return<SignUp/>
}
   
   hSignUp(){
    alert("hsignup")
    {this.setState({isLogin:false})};
   }
  render() {
    return (
      <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >

        <button onClick={this.hLogin}> Login </button>          <button onClick={this.hSignUp}> Signup </button>
       
       {this.check()}
         
       <button> Go </button>
  </div>
    )
  }
}