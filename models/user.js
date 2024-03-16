const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  slots: []
});

// Ensure unique index on email field
userSchema.index({ email: 1, fname: 1, password: 1, phonenumber: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);
