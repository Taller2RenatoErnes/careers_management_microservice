const express = require("express");
const morgan = require("morgan");
const db = require("./database/database");

const startGrpcServer = require("./grpcClient");

const app = express();


app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


// GRPC

startGrpcServer();








module.exports = app; 
