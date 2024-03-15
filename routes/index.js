const express = require('express');
const router = express.Router();
const Business = require('../models/business');

// Route to find all businesses
router.get('/business', async (req, res) => {
  try {
    const businesses = await Business.find();
    console.log('business', businesses)
    res.json(businesses);
  } catch (error) {
    console.error('Error fetching businesses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Other routes can be defined similarly

module.exports = router;

