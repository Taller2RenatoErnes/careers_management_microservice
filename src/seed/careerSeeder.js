const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); 
const Career = require("../database/models/career");
const Subject = require("../database/models/subject"); 
const SubjectRelationship = require("../database/models/subjectRelationship");

const uri = process.env.MONGO_URI;

const seedData = async () => {
  try {
    console.log("Iniciando seed de datos 🌱");

    await mongoose.connect(uri);
    console.log("Conectado a la base de datos ✅");

    await Career.deleteMany({});
    await Subject.deleteMany({});
    await SubjectRelationship.deleteMany({});
    console.log("Colecciones limpiadas 🗑️");

    const careersData = JSON.parse(fs.readFileSync(path.join(__dirname, "careers.json"), "utf8"));
    const subjectsData = JSON.parse(fs.readFileSync(path.join(__dirname,"subjects.json"), "utf8"));
    const relationshipsData = JSON.parse(fs.readFileSync(path.join(__dirname,"subjectRelation.json"), "utf8"));
    
    const careers = await Career.insertMany(careersData);
    console.log("Carreras insertadas ✅");


    // Insertar asignaturas
    const subjects = await Subject.insertMany(subjectsData);
    console.log("Asignaturas insertadas ✅");

    // Actualizar las relaciones de pre-requisitos con los ObjectIds de las asignaturas
    relationshipsData.forEach((relationship) => {
      const subject = subjects.find((s) => s.name === relationship.subject_id);
      const preSubject = subjects.find((s) => s.name === relationship.preSubject_id);

      if (subject && preSubject) {
        relationship.subject_id = subject.id;
        relationship.preSubject_id = preSubject.id;
      }
    });

    // Insertar relaciones entre asignaturas
    await SubjectRelationship.insertMany(relationshipsData);
    console.log("Relaciones insertadas ✅");
    
  } catch (error) {
    console.error("Error durante el seed:", error);
    process.exit(1); 
  }
};


/*  Todo este script debe de ser modificado en base a las BD de los microservicios con los que se esté trabajando,
    se deben sincronizar los datos de usuarios para poder tener su avance academico.
*/

seedData();
