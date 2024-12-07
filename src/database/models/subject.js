const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    code: String,
    name: String,
    department: String,
    credits : Number,
    semester : Number,
    career_id : mongoose.Schema.Types.ObjectId,
    prerequisites : [],
  });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;