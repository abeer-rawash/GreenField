var mysql = require('mysql');
var data = require('./data.json');

//Edit with your user and password
var con = mysql.createConnection({
host: "localhost",
user: "abeer",
password: "0000",
database : "stock"
});


//Connecting mySQL and creating a table in our stock; called cars & users
con.connect(function(err) {
  if (err) throw err;
    console.log("MySQL Connected!!!");
    var Cars = "CREATE TABLE IF NOT EXISTS cars (brand VARCHAR(20), year YEAR, price INT, colour VARCHAR(20), description VARCHAR(250), image TEXT, id INT PRIMARY KEY )";
    con.query(Cars, function (err, result) {
      if (err) throw err;
      console.log("Cars Table created!!!");
    });
    var Users = "CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT, firstName VARCHAR(20), lastName VARCHAR(20), username VARCHAR(20), email VARCHAR(30), password VARCHAR(30), PRIMARY KEY (id))";
    con.query(Users, function (err, result) {
      if (err) throw err;
      console.log("Users Table created!!!");
    });
});


//Save function to see our dummy data in the mysql terminal (insert data in the columns)
for (var i = 0; i < data.length; i++) {
  var inserting = `REPLACE INTO cars (brand, year, price, colour, description, image,id) VALUES (?, ?, ?, ?, ?, ?, ?) `;
    let rows = [data[i].brand, data[i].year, data[i].price, data[i].colour, data[i].description,data[i].image,i+1];
      con.query(inserting, rows, function (err, results, fields) {
        if (err) throw err;
        console.log("Table inserted");
      });
}



module.exports.con = con;