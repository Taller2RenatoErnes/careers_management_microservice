const express = require("express");
const morgan = require("morgan");

const app = express();


const careersRouter = require ("./routes/careersRoutes");

app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/careers", careersRouter);

module.exports = app; 
