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
import Box from '@material-ui/core/Box';
import Header from './header.jsx';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';



const MyInput = styled(TextField) ({
  color : "#0A194F",
  width: 400,
  margin: "20px 40px 50px 50px"
})


const Mypaper = styled(Paper) ({
  width : 510,
  height:500
})


const Mybutton = styled(Button) ({
  width : 100,
  margin :"10px 100px 70px 55px"
})


const MyGrid =styled(Grid) ({
  marginTop : 120
})


export default class Login extends React.Component {
  constructor(props) {
    super(props)
      this.state = {username: "", password: ""}
  }
  render() {
    return(

      <div>
        <Header/><br></br><br></br><br></br><br></br><br></br><br></br>
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

          <form>
          <pre>                          <AccountCircleIcon style={{  fontSize: 100 }} />
          </pre>
          <MyInput variant="outlined"  margin="normal" required fullWidth label="Email Address" autoFocus/>
          <MyInput variant="outlined" margin="normal" required fullWidth label="Password" type="password" />
          <pre>                    <Link to ="/aboutUs" href="#"  style={{ textDecoration: 'none' }}>Don't have an account? Sign up here</Link>
          </pre>
          <Mybutton variant="contained" color="primary"   fullWidth>
          Logn In
          </Mybutton>
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