const Contact = require('../models/Contact');

// Submit contact form
const submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all submitted contact forms (for admin)
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    submitContactForm,
    getAllContacts
};
