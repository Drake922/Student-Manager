require("dotenv").config();

const mysql = require("mysql2"); //require means import


// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
// console.log("MYSQLHOST =", process.env.MYSQLHOST);
// console.log("MYSQLUSER =", process.env.MYSQLUSER);
// console.log("MYSQLDATABASE =", process.env.MYSQLDATABASE);
// console.log("PORT =", process.env.PORT);


const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

//VERSION CONTROL: WHICH MEANS TRACKING ALL CHANGES

db.connect((err) => {
     if (err) console.log("DB Error:", err); 
     else console.log("MySQL Connected!");
     }); 
     
module.exports = db;