const express = require("express");
const morgan = require("morgan");
const db = require("./database/database");

const app = express();


const careersRouter = require ("./routes/careersRoutes");
const subjectsRouter = require ("./routes/subjectsRoutes");


app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/careers", careersRouter);
app.use("/subjects", subjectsRouter);

module.exports = app; 
