const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
  day: { type: String},
  time: { type: String},
  userID: { type: String},
  businessID: { type: String}
})

const Slot = mongoose.model('Slot',slotSchema);

