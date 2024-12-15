var grpc = require('@grpc/grpc-js');
const path = require('path');

const { 
    careers,
} = require("./controllers/careerController");  
const { 
    subjects,
    prerequisites_objects,
    prerequisites_map,
    postrequisites_map,
} = require("./controllers/subjectController");

const PROTO_PATHS = {
    careers: path.join(__dirname, './protos/careers.proto'),
    subjects: path.join(__dirname, './protos/subjects.proto'),
    
  };
var protoLoader = require('@grpc/proto-loader');
var grpc = require('@grpc/grpc-js');

var careerspackageDefinition = protoLoader.loadSync(PROTO_PATHS.careers,{keepCase: true,});
var careersProto = grpc.loadPackageDefinition(careerspackageDefinition);

var subjectpackageDefinition = protoLoader.loadSync(PROTO_PATHS.subjects,{keepCase: true,});
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
        prerequisites_objects,
        prerequisites_map,
        postrequisites_map,
        
    });
    

};






  
  
module.exports = startGrpcServer;