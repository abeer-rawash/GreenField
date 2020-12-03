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
import $ from 'jquery';
import ReactDOM from 'react-dom';
// import DisplayCars from './displayCar.jsx';

export default class List extends React.Component {
  constructor(props) {
    super(props)
this.state ={
  idValue :""
}
  }


  onChangeHandle(event){
    this.setState({
      idValue:event.target.value
  })
}


onSubmit(idValue){
  console.log(this.state.idValue)
  var that = this
  var obj = {};
  obj.id = this.state.idValue;
  $.ajax({
    url: '/display',
    method: 'POST',
    data: JSON.stringify({obj}),
    contentType: 'application/json',
    success: (data)=> {
      that.updateState(data)
      console.log(data, " im from onSubmit")
    },
    error: (err)=> {console.log("Post Method Failed")}
  });
}

updateState(data){
  this.setState({cars: data})
}




    render(){
      // console.log(data, "prrrrrrrrrrrrr")
      return (

          <Grid container
          spacing = "3"
          justify="flex-start"
          alignItems="flex-start"
          direction = "row"
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
                  {this.props.car.description}   {". External body colour :"}{this.props.car.colour}
                  </Typography>
                  </CardContent>
                </CardActionArea>

                <input
                 type= "number"
                 placeholder= "Enter car Id"
                 value = {this.state.idValue}
                onChange={this.onChangeHandle.bind(this)}></input>
                <Button onClick={this.onSubmit.bind(this)}>show</Button>
              </Card>
            </Grid>
  {/* <DisplayCars onSubmit = {this.onSubmit}/> */}
          </Grid>


    )}
}
