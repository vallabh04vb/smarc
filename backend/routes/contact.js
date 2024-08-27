const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  const {
    name,
    email,
    message,
    college,
    yearOfStudy,
    gender,
    dateOfBirth,
    whatsappNumber,
    ip,
  } = req.body;

  if (
    !name ||
    !email ||
    !college ||
    !yearOfStudy ||
    !gender ||
    !dateOfBirth ||
    !whatsappNumber
  ) {
    console.log(req.body);
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      college,
      yearOfStudy,
      gender,
      dateOfBirth,
      whatsappNumber,
      ip,
    });

    await newContact.save();

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
