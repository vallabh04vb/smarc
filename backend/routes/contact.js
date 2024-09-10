const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  const {
    name,
    email,
    college,
    yearOfStudy,
    gender,
    profession,
    apmc,
    amount,
    current,
    accommodation,
    dateOfBirth,
    cart,
    whatsappNumber,
    ip,
    referral,
  } = req.body;
  console.log(req.body);
  if (
    !name ||
    !email ||
    !profession ||
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
      profession,
      apmc,
      amount,
      current,
      cart,
      accommodation,
      dateOfBirth,
      whatsappNumber,
      ip,
      referral,
    });

    await newContact.save();

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' + error });
  }
});

module.exports = router;
