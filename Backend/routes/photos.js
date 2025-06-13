const express = require('express');
const router = express.Router();
const { getAllPhotos, createPhoto } = require('../controllers/photoController');

router.get('/', getAllPhotos);
router.post('/', createPhoto);

module.exports = router;
