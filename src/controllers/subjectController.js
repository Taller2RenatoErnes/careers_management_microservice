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

const subjectsByCareer = async (call, callback) => {
    try{
        const careerId = call.request.career_id;

        const subjects = await subjectService.getSubjectsByCareer(careerId);
        if (!subjects){
            return callback({
                code: grpc.status.NOT_FOUND,
                details: 'No se encontraron materias para la carrera'
            });
        }
        callback(null, {subjects});
    }catch (error){
        callback({
            code: grpc.status.INTERNAL,
            details: 'Error al obtener las materiaas'
        });
    }
}; 




const getSubjectsById = async (req, res) => {
    try {
        const careerId = req.params;
        if (!careerId) {  
            return res.status(400).json({ message: 'Falta el id de la carrera' });
        }else{
            const subjects = await subjectService.getSubjectsByCareer(careerId);
            if(subjects.length === 0){
                return res.status(404).json({ message: 'No se encontraron materias para la carrera' });
            }
            return res.status(200).json(subjects)
        }
    } catch (err) {
        console.error('Error al obtener datos:', err);
        res.status(500).json({ message: 'Error al obtener los datos' });
    }
};





module.exports = { getSubjectsById, subjects, subjectsByCareer };