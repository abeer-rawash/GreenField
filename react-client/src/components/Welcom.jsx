import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
var Mypaper = styled(Paper)({
   margin: '50px',
  width : 510,
  height:500
})
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const MyButton = styled(Button)  ( {
  border: 0,
 borderRadius: 3,
  padding: '1px',
  margin: " 20px 9px 20px 200px",
   fontStyle:"normal",
  fontWeight: '500px',
  fontSize: '18px',
  color  : '#0A194F'
});

var Mybutton = styled(Button)({
  width : 100,
  margin : "-60px 10px 180px 180px"
})
export default function NaveBar
() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color = 'default'>
        <Toolbar>
          <img src = "https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"  width="150" height="70"></img>
          <Link to ="/"><MyButton color="">HOME</MyButton></Link>           <Link to ="/inventory"><MyButton color="">INVENTORY</MyButton></Link>
          <Link to ="/about"><MyButton color="">ABOUT US</MyButton></Link>
         <Link to ="/login"><MyButton color="">LOG IN</MyButton></Link>
         <IconButton><PersonIcon/></IconButton>
        </Toolbar>
      </AppBar>
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
     <Typography component="div" style={{ height: '50vh' , width :'50vh', color : '#0A194F',  fontStyle: 'italic', fontSize: 30, padding:'60px 60px 60px 60px' }} >
<pre><b>CarSooq</b></pre><br></br>
Welcome `username` to CarSooq where you can easily pick your dream car!!


        </Typography>
        <form>
        <Mybutton
      variant="contained" color="primary"   fullWidth

      >
            Log Out
            </Mybutton>
    </form>
      </Mypaper>
      </Grid>
      <Typography  align='center' variant='subtitle1' color = 'primary'>&copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</Typography>
    </div>
  );
}