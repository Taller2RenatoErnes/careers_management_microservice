const mongoose = require('mongoose');

const subjectRelationshipSchema = new mongoose.Schema({
    id: Number,
    subject_id : { type: Number, ref: "Subject" },
    preSubject_id : { type: Number, ref: "Subject" },
  });

const SubjectRelationship = mongoose.model('SubjectRelationship', subjectRelationshipSchema);

module.exports = SubjectRelationship;