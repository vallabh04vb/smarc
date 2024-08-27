const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  college: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  ip: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
