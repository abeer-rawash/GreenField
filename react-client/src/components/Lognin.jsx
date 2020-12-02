import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Footer from './footer.jsx';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography  from '@material-ui/core/Typography';
import Wellcome from './Welcom.jsx';
import Box from '@material-ui/core/Box';
import About from './about.jsx';



const MyInput = styled(TextField) ({
  color : "#0A194F",
  width: 400,
  margin: "20px 40px 50px 50px"
})


const MyButton = styled(Button) ({
  width : 100,
  margin : "50px 50px 200px 350px"
})


const Mypaper = styled(Paper) ({
  width : 510,
  height:500
})


const Mybutton = styled(Button) ({
  width : 100,
  margin :"-446px 100px 10px -50px"
})


const MyGrid =styled(Grid) ({
  marginTop : 120
})


export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
      this.state = {username: "", password: ""}
  }
  render() {
    return(
      <div>
        <Grid
        alignItems ='center'
        alignContent ='center'
        container
        direction="row"
        justify="center"
        alignItems="center"
        justify ='center'
        >
          <Mypaper>
          <pre>                       <img src = "https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"  width="150" height="70"></img>
          </pre>
          <form>
          <MyInput    variant="outlined"  margin="normal" required fullWidth label="Email Address" autoFocus/>
          <MyInput variant="outlined" margin="normal" required fullWidth label="Password" type="password" />
          <MyButton variant="contained" color="primary"   fullWidth>
          Logn In
          </MyButton>
          <Link href="#" >Create account?..</Link>
          <Mybutton variant="contained" color="primary"   fullWidth>
          INVENTORY
          </Mybutton>
          <Typography  align='center' variant='subtitle1' color = 'primary'>&copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</Typography>
          </form>
          </Mypaper>
        </Grid>
      </div>
  )}
}