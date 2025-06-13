const express = require('express');
const router = express.Router();
const { submitContactForm, getAllContacts } = require('../controllers/contactController');

// Route to submit a contact form
router.post('/', submitContactForm);

// Route to get all contact submissions (optional - for admin dashboard)
router.get('/', getAllContacts);

module.exports = router;
