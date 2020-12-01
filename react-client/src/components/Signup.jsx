import React from 'react';
import ReactDOM from "react-dom";
import $ from "jquery";
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Footer from './footer.jsx'
var MyInput = styled(TextField)({
  color : "#0A194F"
})

export default class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {firstName: "", lastName: "", username: "", email: "", password: ""}

      this.onChangeHandle = this.onChangeHandle.bind(this);
      this.submitHandle = this.submitHandle.bind(this);
  }



  onChangeHandle(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }


  submitHandle (firstName, lastName, username, email, password){
    console.log(this.state.firstName, this.state.lastName)

    var info = {};
    info.firstName = this.state.firstName;
    info.lastName = this.state.lastName;
    info.username = this.state.username;
    info.email = this.state.email;
    info.password = this.state.password;

    if(this.state.firstName == "" || this.state.lastName == "" || this.state.username == "" || this.state.email == ""){
      alert ("Please fill in a valid value for all required fields")
    }
    if(0 < this.state.password.length && this.state.password.length < 8){
      alert ("Your password is too short")
    }
     else {
    $.ajax({
      url: "/signup",
      method: "POST",
      data: JSON.stringify({info}),
      contentType: "application/json",
      success: (data)=>{ console.log("post method successeded ", data)},
      error: (err)=>{ console.log("post method failed", err)}
    })}
  }


  render() {
    return(
  <div>
    <form>
      <p>First name:
        <MyInput
        id="outlined-basic" label="First name" variant="outlined"
        name = "firstName"
        onChange = {this.onChangeHandle}
        /></p>
      <p>Last name:
        <MyInput
         id="outlined-basic" label="Last name" variant="outlined"
         name = "lastName"
        onChange = {this.onChangeHandle}
         /></p>
         <p>Username:
        <MyInput
        id="outlined-basic" label="username" variant="outlined"
        name = "username"
        onChange = {this.onChangeHandle}
        /></p>
      <p>Email:
        <MyInput
         id="outlined-basic" label="Email" variant="outlined"
         name = "email"
        onChange = {this.onChangeHandle}
          /></p>
      <p>Password:
         <MyInput
         id="outlined-basic" label="Password"  type="password" variant="outlined"
         name = "password"
        onChange = {this.onChangeHandle}
         /></p>
      <p><Button
      variant="contained" color="primary"   fullWidth
      onClick = {this.submitHandle}
      >
             Sign Up
            </Button></p>
            <Footer/>
    </form>
  </div>)}
}
