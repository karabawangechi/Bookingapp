const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  phonenumber: String,
  slots: []
});

// Ensure unique index on email field
userSchema.index({ email: 1, fname: 1, password: 1, phonenumber: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

// Function to register a new user
const registerUser = async (userData) => {
  try {
    // Create a new user instance
    const newUser = new User(userData);
    // Save the user to the database
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  User,
  registerUser
};
