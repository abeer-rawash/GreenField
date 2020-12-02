import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography' ;
const Footer = () => {
  var MyGrid =styled(Grid)({
   marginTop : 150
   })

   var MyPaper = styled(Paper)({
     color : '#0A194F'
   })
var MyTypography = styled(Typography)({
  color :'#fafafa'
})

  return(
    <div>
      <MyGrid item xs={12}>
          {/* <MyPaper > &copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</MyPaper> */}
          <MyTypography  align='center' variant='subtitle1'>&copy;{new Date().getFullYear()} CarSooq | All right reserved | Terms Of Service | Privacy</MyTypography>
        </MyGrid>
        </div>
  )
}
export default Footer;
