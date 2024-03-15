const mongoose = require('mongoose');

const businessSchema = mongoose.Schema({
  day: String,
  time: String,
  userID: String,
  businessID: String
});

businessSchema.index({ day: 1, time: 1, userID: 1, businessID: 1 }, { unique: true });

const Business = mongoose.model('Business', businessSchema);

// Function to add a slot
const addSlot = async (slotData) => {
  try {
    // Create a new slot instance
    const newSlot = new Business(slotData);
    // Save the slot to the database
    await newSlot.save();
    return newSlot;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Business,
  addSlot
};
