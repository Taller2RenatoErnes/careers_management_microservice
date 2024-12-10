const Subject = require("../database/models/subject");
const mongoose = require('mongoose');

const getSubjects = async () => {
    try {
        const subjects = await Subject.find();
        return subjects;
    } catch (err) {
        console.error('Error al obtener datos:', err);
        throw new Error('Error al obtener los datos' + err.message);
    }
}   

const getSubjectsByCareer = async (career_id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(career_id)) {
        throw new Error('ID de carrera inválido');
    }
    const subjects = await Subject.find({ career_id: new mongoose.Types.ObjectId(career_id) });

    if (!subjects) {
        throw new Error('Materia no encontrada');
    }
    return subjects;
   
  } catch (err) {
    throw new Error('Error al obtener los datos' + err.message);
  }
}





module.exports = { getSubjectsByCareer, getSubjects };   