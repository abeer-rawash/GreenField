import React from 'react';
import ReactDOM from "react-dom";
import $ from "jquery";
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Footer from './footer.jsx'
// import strengthIndicator from './passwordStrength.jsx'
var MyInput = styled(TextField)({
  color : "#0A194F"
})

// var strength = strengthIndicator(this.state.password);
export default class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {firstName: "", lastName: "", username: "", email: "", password: ""}

      this.onChangeHandle = this.onChangeHandle.bind(this);
      this.submitHandle = this.submitHandle.bind(this);
      this.hasNumber = this.hasNumber.bind(this);
      this.hasMixed = this.hasMixed.bind(this);
      this.hasSpecial = this.hasSpecial.bind(this);
      this.strengthIndicator = this.strengthIndicator.bind(this);
      this.strengthColor = this.strengthColor.bind(this);
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
    $.ajax({
      url: "/signup",
      method: "POST",
      data: JSON.stringify({info}),
      contentType: "application/json",
      success: (data)=>{ console.log("post method successeded ", data)},
      error: (err)=>{ console.log("post method failed", err)}
    })
  }





    strengthColor (count) {
    if (count < 2)
       return 'red';
    if (count < 3)
       return 'yellow';
    if (count < 4)
       return 'orange';
    if (count < 5)
       return 'lightgreen';
    if (count < 6)
       return 'green';
 }


   hasNumber(password)  {
    return new RegExp(/[0-9]/).test(this.state.password);
  }
   hasMixed(password) {
    return new RegExp(/[a-z]/).test(this.state.password) &&
             new RegExp(/[A-Z]/).test(this.state.password);
  }
   hasSpecial(password) {
    return new RegExp(/[!#@$%^&*)(+=._-]/).test(this.state.password);
  }

    strengthIndicator(password) {
    console.log(this.state.password,"hiiiiiiiiiiiii")
    let strengths = 0;
    if (this.state.password.length > 5)
       strengths++;
    if (this.state.password.length > 7)
       strengths++;
    if (hasNumber(this.state.password))
       strengths++;
    if (hasSpecial(this.state.password))
       strengths++;
    if (hasMixed(this.state.password))
       strengths++;
    return strengths;
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
        id="outlined-basic" label="First name" variant="outlined"
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


// console.log(this.props.password)