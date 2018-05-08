var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  Name: String,
  Age: Number,
  Title: String,
  Symptoms: String,
});

module.exports = mongoose.model('PatientSchema', PatientSchema);