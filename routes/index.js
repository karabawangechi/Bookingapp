const express = require('express');
const router = express.Router();
const Business = require('../models/business');
const User = require('../models/user');
const Slot = require('../models/slot');

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
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });
});

router.post('/signup', async (req,res) => {
  const newUser = new User({
    lname: req.body.lastname,
    fname: req.body.firstname,
    email: req.body.email,
    password: req.body.password,
  })

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

router.post('slot', async (req, res)=> {
  const newSlot = new Slot({
    day: req.body.day,
    time: req.body.time,
    userID: req.body.userId,
    businessID: req.body.businessId
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

