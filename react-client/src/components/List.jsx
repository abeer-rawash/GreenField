import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';


export default class List extends React.Component {
  constructor(props) {
    super(props)

  }
    render(){
    return (


      <div>

      <Grid container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
       >

        <Grid
        key = {this.props.car.id}
        item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={this.props.car.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {this.props.car.brand}     {" $"}{this.props.car.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {this.props.car.description}   {", with external body colour :"}{this.props.car.colour}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      </Grid>
      </div>
    )}
}