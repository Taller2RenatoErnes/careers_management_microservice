const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    id: Number,
    name: String,
    department: String,
    credits : Number,
    semester : Number,
    code : String,
    career_id : String,
    prerequisites : [],
  });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;