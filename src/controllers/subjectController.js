const subjectService = require('../services/subjectService');
const grpc = require('@grpc/grpc-js');

const subjects = async (call, callback) => {

    try {
        const subjects = await subjectService.getSubjects();
          if (subjects.length === 0) {
              return callback({
              code: grpc.status.NOT_FOUND,
              details: 'No se encontraron materias'
              });
          }
        callback(null, {subjects});
      } catch (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: 'Error al obtener las materias'
        });
      }
};



const prerequisites_objects = async (call, callback) => {
    try{
        const subjectId = call.request._id;
        const prerequisites = await subjectService.getPrerequisites(subjectId);
        if (!prerequisites){
            return callback({
                code: grpc.status.NOT_FOUND,
                details: 'No se encontraron requisitos para la materia'
            });
        }
        callback(null, {prerequisites});
    }catch{
        callback({
            code: grpc.status.INTERNAL,
            details: 'Error al obtener las materias 1' 
            
        });
    }
};

const prerequisites_map = async (call, callback) => {
    try{
        const career_id = call.request.career_id;
        const prerequisites = await subjectService.prerequisites_map(career_id);

        if (!prerequisites){
            return callback({
                code: grpc.status.NOT_FOUND,
                details: 'No se encontraron requisitos para la materia'
            });
        }
        callback(null, {prerequisites});
    }catch{
        callback({
            code: grpc.status.INTERNAL,
            details: 'Error al obtener las materias controller' 
            
        });
    }

};
const postrequisites_map = async (call, callback) => {
    try{
        const career_id = call.request.career_id;
        const postrequisites = await subjectService.postrequisites_map(career_id);
        if (!postrequisites){
            return callback({
                code: grpc.status.NOT_FOUND,
                details: 'No se encontraron requisitos para la materia'
            });
        }
        callback(null, {postrequisites});

    }catch{
        callback({
            code: grpc.status.INTERNAL,
            details: 'Error al obtener las materias controller' 
            
        });
    }
};











module.exports = {subjects, prerequisites_objects, prerequisites_map, postrequisites_map };