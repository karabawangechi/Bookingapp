const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
  day: { type: String},
  time: { type: String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business',
    },
  })

const Slot = mongoose.model('Slot',slotSchema);

