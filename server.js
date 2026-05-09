require("dotenv").config();

const express = require("express"); 
const cors = require("cors");
//Today: In your server.js, add this two lines below
const path = require("path"); //1st and

const studentRoutes = require("./routes/studentroutes.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "public"))); //2nd

app.use("/api/students", studentRoutes); //where visit on url to communicate with server e.g www.ourapp.com/api/students


const Port = process.env.PORT || 3000;

app.listen(Port, () =>{
 console.log(`Server is running on ${Port}`)

  })
