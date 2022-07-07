const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student_Controller = require("./student/controller/Student_Controller");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
const dotenv = require("dotenv").config();
console.log(dotenv.parsed)


// Routes
app.use("/student", Student_Controller);

// DB connection and server start-up
const main = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://rajesh_vjr:Nanipass0546@cluster0.mbyk7mv.mongodb.net/?retryWrites=true&w=majority")
      .then(() => {
        console.log("DB is connected");
      });

    app.listen(port, () => {
      console.log(`server is up and running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();