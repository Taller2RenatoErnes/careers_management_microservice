const mongoose = require('mongoose');

const subjectRelationshipSchema = new mongoose.Schema({
    subject_id : { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    preSubject_id : { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  });

const SubjectRelationship = mongoose.model('SubjectRelationship', subjectRelationshipSchema);

module.exports = SubjectRelationship;