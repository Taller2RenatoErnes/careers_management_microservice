const express = require("express");
const morgan = require("morgan");
const db = require("./database/database");

const startGrpcServer = require("./grpcClient");

const careersRouter = require ("./routes/careersRoutes");
const subjectsRouter = require ("./routes/subjectsRoutes");

const app = express();


app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


// GRPC

startGrpcServer();


// HTTP
app.use("/api/careers", careersRouter);
//app.use("/api/subjects", subjectsRouter);





module.exports = app; 
