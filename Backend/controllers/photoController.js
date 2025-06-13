const Photo = require('../models/Photo');

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find();
        res.json(photos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createPhoto = async (req, res) => {
    const { title, url, description } = req.body;
    try {
        const newPhoto = new Photo({ title, url, description });
        await newPhoto.save();
        res.status(201).json(newPhoto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllPhotos,
    createPhoto
};
