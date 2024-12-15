const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    id: Number,
    code: String,
    name: String,
    department: String,
    credits : Number,
    semester : Number,
    career_id : { type: Number, ref: "Career" },
  });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;