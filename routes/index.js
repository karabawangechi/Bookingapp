const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const router = express.Router();
const Business = require('../models/business');
const User = require('../models/user');
const Slot = require('../models/slot');
require('crypto').randomBytes(64).toString('hex');

const refreshTokens = [];

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

router.post('/join', async (req, res) => {

  const newBiz = new Business({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newBiz.save(newBiz)
    .then(data => {
      const token = jwt.sign({
        userID: data._id,
        email: email
      },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "5min",
        });
      const refreshToken = jwt.sign(
        {
          userID: data._id,
          email: email
        },
        process.env.JWT_SECRET_KEY
      );

      refreshTokens.push(refreshToken);
      return res.status(201).json({
        user: data,
        token: token,
        refresh: refreshToken,
      })
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });
});

router.post('/signup', async (req, res) => {
  const newUser = new User({
    lname: req.body.lastname,
    fname: req.body.firstname,
    email: req.body.email,
    password: req.body.password,
  })

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, salt);

  newUser.save(newUser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });

})

router.post('slot', async (req, res) => {
  const newSlot = new Slot({
    day: req.body.day,
    time: req.body.time,
    userID: req.params.userId,
    businessID: req.params.businessId
  })

  newSlot.save(newSlot)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });

})
// Other routes can be defined similarly

module.exports = router;

