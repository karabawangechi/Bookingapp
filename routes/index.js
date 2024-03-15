// const express = require('express');
// const router = express.Router();
// const Business = require('./models/business.js');

const { required } = require("nodemon/lib/config")

// // Route to find all businesses
// router.get('/businesses', async (req, res) => {
//   try {
//     const businesses = await Business.find();
//     res.json(businesses);
//   } catch (error) {
//     console.error('Error fetching businesses:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Other routes can be defined similarly

// module.exports = router;

module.exports = function (app){
    const blist = require('.../controllers/business')
}