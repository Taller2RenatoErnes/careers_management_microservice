const mongoose = require('mongoose');

const subjectProgressSchema = new mongoose.Schema({
    user_id : String,
    subject_id : { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  });

const SubjectProgress = mongoose.model('SubjectProgress', subjectProgressSchema);

module.exports = SubjectProgress;