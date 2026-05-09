require("dotenv").config();
const express = require("express"); 
const cors = require("cors");
const path = require("path")

const studentRoutes = require("./studentroutes/routes");

const app = express();

app.use(cors());

app.use(express.json(path.join(__dirname, "public")));

app.use("/api/students", studentRoutes);

const Port = process.env.PORT || 8080

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});