var grpc = require('@grpc/grpc-js');
const path = require('path');

const { 
    careers,
} = require("./controllers/careerController");  
const { 
    subjects,
    subjectsByCareer,
} = require("./controllers/subjectController");

const careers_PROTO_PATH = path.join(__dirname, './protos/careers.proto');
const subjects_PROTO_PATH = path.join(__dirname, './protos/subjects.proto');

var protoLoader = require('@grpc/proto-loader');
var grpc = require('@grpc/grpc-js');

var careerspackageDefinition = protoLoader.loadSync(careers_PROTO_PATH,{keepCase: true,});
var careersProto = grpc.loadPackageDefinition(careerspackageDefinition);

var subjectpackageDefinition = protoLoader.loadSync(subjects_PROTO_PATH,{keepCase: true,});
var subjectProto = grpc.loadPackageDefinition(subjectpackageDefinition);

const startGrpcServer = async () => {
    const PORT = '0.0.0.0:50052';
    const server = new grpc.Server();
    server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
        console.error('Error al iniciar el servidor gRPC:', err);
        return;
        }
        console.log(`Servidor gRPC escuchando en ${PORT}`);
    });
    

    server.addService(careersProto.career.service, {
        careers
    });
    server.addService(subjectProto.subject.service, {
        subjects,
        prerequisites_map: subjectsByCareer,
        prerequisites_objects: subjectsByCareer,
        
    });

};






  
  
module.exports = startGrpcServer;