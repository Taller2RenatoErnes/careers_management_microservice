const progressService = require('../services/progressService');
const grpc = require('@grpc/grpc-js');

const progress = async (call, callback) => {
    try{
    
        const user_id = call.request.user_id;
        const progress = await progressService.getProgress(user_id);

        if (!progress){
            return callback({
                code: grpc.status.NOT_FOUND,
                details: 'No se encontraron requisitos para la materia'
            });
        }
        callback(null, {progress});

    }catch{
        callback({
            code: grpc.status.INTERNAL,
            details: 'Error al obtener las materias controller' 
            
        });
    }
};

const updateProgress = async (data) => {
    try{
        const user_id = data.user_id;
        const subject_id = data.subject_id;
        const progress = await progressService.updateProgress(user_id, subject_id);

        if (!progress){
            console.log('No se logro añadir el progreso');
        }
        console.log('Progreso añadido');

    }catch(err){
        console.log('Error al añadir el progreso', err);
    }
};

module.exports = { progress, updateProgress };   