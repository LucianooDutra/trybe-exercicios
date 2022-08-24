const express = require('express');
const { getActivities, insertBlogPostFile } = require('../../utils/readAndWriteActivities');
const validateName =  require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');

const activities = express.Router();

activities.get('/activities', async (req, res) => {
  const activities = await getActivities();
	return res.status(200).json(activities);
});

activities.post('/activities',
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  async (req, res) => {
  const activit =  req.body;
  const inserted = await insertBlogPostFile(activit);
  res.status(201).json(activit);
});

module.exports = activities;