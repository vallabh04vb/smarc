const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  apmc: { type: String },
  profession: { type: String, required: true },
  amount: { type: String },
  college: { type: String },
  accommodation: { type: String },
  yearOfStudy: { type: String },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  ip: { type: String },
  date: { type: Date, default: Date.now },
  cart: [cartItemSchema],
  referral: { type: String },
});

module.exports = mongoose.model('Contact', contactSchema);
