class Display extends React.Component{
  constructor(props){
      super(props);
      this.state={ cars : [] };

      fetch('http://localhost:3000/inventory')
          .then(response =>{
              response.json();
          })
          .then(posts => {
              this.setState({cars})
          })
          .then( (err) => {
              console.log(err);
          })
  }
  render(){
      return(
          <div>
              <ul>
                  {this.state.cars.map( post =>
                  <p>
                      <ul key = {this.props.car.id}>
                      <h3>{this.props.car.brand}</h3>
                      <img src = {this.props.car.image} width = "250" height = "200"/>
                  </p>
                  )}
              </ul>
          </div>
      )
  }
}

export default Display;