const Subject = require("../database/models/subject");
const SubjectRelationship = require("../database/models/subjectRelationship");
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

const getPrerequisites = async (subject_id) => {
  try{
    if (!mongoose.Types.ObjectId.isValid(subject_id)) {
      throw new Error('ID de materia inválido');
  }
  const prerequisites = await SubjectRelationship.find({ subject_id: new mongoose.Types.ObjectId(subject_id) });
  return prerequisites;

  }catch(err){
    throw new Error('Error al obtener los datos' + err.message);
  }
}


const prerequisites_map = async (career_id) => {
  try{
      const subjects = await Subject.find({ career_id: new mongoose.Types.ObjectId(career_id) }, '_id');
      if (!subjects){
          throw new Error('No se encontraron materias para la carrera');
      }
      const subjectsObjects = [];
      for (const subject of subjects){
        const prerequisites = await SubjectRelationship.find({ subject_id: new mongoose.Types.ObjectId(subject._id)},'preSubject_id');;
        const prerequisites_id = prerequisites.map(prerequisite => prerequisite.preSubject_id);
        const subjectObject = subject.toObject();
        subjectObject.prerequisites = prerequisites_id;
        subjectsObjects.push(subjectObject);
      }

      return subjectsObjects;
  }catch{
      throw new Error('Error al obtener las materias service');
  }
};

const postrequisites_map = async (career_id) => {
  try{
      const subjects = await Subject.find({ career_id: new mongoose.Types.ObjectId(career_id) });
      if (!subjects){
          throw new Error('No se encontraron materias para la carrera');
      }
      console.log(subjects);
      const subjectsObjects = [];
      for (const subject of subjects){
        const postrequisites = await SubjectRelationship.find({ preSubject_id: new mongoose.Types.ObjectId(subject._id)});;

        const postrequisites_id = postrequisites.map(postrequisite => postrequisite.subject_id);
        const subjectObject = subject.toObject();
        subjectObject.postrequisites = postrequisites_id;
        subjectsObjects.push(subjectObject);
      }

      return subjectsObjects;
  }catch{
      throw new Error('Error al obtener las materias service');
  }
};




module.exports = { getSubjectsByCareer, getSubjects, getPrerequisites, prerequisites_map, postrequisites_map };   