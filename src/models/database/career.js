const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    duration: Number,
  });

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
