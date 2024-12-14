const express = require("express");
const morgan = require("morgan");
const db = require("./database/database");

const startGrpcServer = require("./grpcClient");
const RabbitService = require("./services/rabbitService");
const careersRouter = require ("./routes/careersRoutes");
const subjectsRouter = require ("./routes/subjectsRoutes");

const app = express();


app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


// GRPC

startGrpcServer();
const rabbitService = new RabbitService();
rabbitService.setupRabbitMQ();


// HTTP
app.use("/api/careers", careersRouter);
//app.use("/api/subjects", subjectsRouter);





module.exports = app; 
