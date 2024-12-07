const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    code: String,
    name: String,
    department: String,
    credits : Number,
    semester : Number,
    career_id : { type: mongoose.Schema.Types.ObjectId, ref: "Career" },
    prerequisites : [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;