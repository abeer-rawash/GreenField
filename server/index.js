const express = require('express');
const myDB = require('../database-sql/index.js');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))




//Get request to render all cars in stock table when opening the inventory page.
app.get("/inventory", (req, res)=> {
  let query =  `SELECT * FROM cars`
    myDB.con.query(query ,(err, results)=> {
     res.send(results)
    })
})


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../react-client/dist/index.html'));

});




app.post('/signup', (req,res)=>{
  let firstName = req.body.info.firstName;
  let lastName = req.body.info.lastName
  let username = req.body.info.username
  let email = req.body.info.email
  let password = req.body.info.password


  console.log(req.body.info.firstName)
  myDB.con.query(`Insert into users (firstName, lastName, username, email, password) VALUES ('${firstName}','${lastName}','${username}','${email}','${password}')`),(err, result) => {
    if (err)
     throw err;
    };
})



app.post('/inventory', (req, res)=> {

  let brand = req.body.object.brand;
  let year = req.body.object.year;
  let colour = req.body.object.colour;
  let price = req.body.object.price;


 if(brand !== "" && year !== "" && colour !== "" && price !== "" && price == "lowestToHighest"){
    let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND year = '${year}' AND colour = '${colour}' ORDER BY Price ASC`
    myDB.con.query(query ,(err, results)=> {
     res.send(results)
    })
  }


  else if(brand == "all"){
    let query =  `SELECT * FROM cars`
    myDB.con.query(query , (err, results)=> {
     res.send(results)
    })
  }

  else if(brand !== "" && year !== "" && colour !== "" && price !== "" && price == "highestToLowest"){
    let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND year = '${year}' AND colour = '${colour}' ORDER BY Price DESC`
    myDB.con.query(query , (err, results)=> {
     res.send(results)
    })
  }



  else if(brand !== "" && year === "" && colour === "" && price === ""){
    let query =  `SELECT * FROM cars WHERE  brand = '${brand}'`
    myDB.con.query(query , (err, results)=> {
    res.send(results)
    console.log(results)
    })
 }

 else if(brand !== "" && year !== "" && colour === "" && price === ""){
    let query =  `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}'`
    myDB.con.query(query , (err, results)=> {
    res.send(results)
    })
  }



 else if(brand !== "" && year !== "" && colour !== "" && price === ""){
  let query =  `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}' AND colour = '${colour}'`
  myDB.con.query(query , (err, results)=> {
  res.send(results)
  })
}



 else if(brand !== "" && year === "" && colour !== "" && price === ""){
  let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND colour = '${colour}'`
  myDB.con.query(query , (err, results)=> {
  res.send(results)
  })
}

});


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
