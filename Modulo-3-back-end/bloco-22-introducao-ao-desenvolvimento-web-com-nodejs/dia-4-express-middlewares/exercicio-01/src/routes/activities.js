const express = require('express');
const { getActivities, insertActiveFile } = require('../../utils/readAndWriteActivities');
const validateName =  require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');

const activities = express.Router();

activities.get('/', async (req, res) => {
  const activities = await getActivities();
	return res.status(200).json(activities);
});

activities.post('/',
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  async (req, res) => {
  const activit =  req.body;
  const inserted = await insertActiveFile(activit);
  res.status(201).json(inserted);
});

module.exports = activities;