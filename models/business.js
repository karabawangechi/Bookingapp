import mongoose from 'mongoose';

export const businessSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

businessSchema.index({ name: 1, email: 1, password: 1 }, { unique: true });

const Business = mongoose.model('Business', businessSchema);

// Function to add a new business
export const addBusiness = async (businessData) => {
  try {
    // Create a new business instance
    const newBusiness = new Business(businessData);
    // Save the business to the database
    await newBusiness.save();
    return newBusiness;
  } catch (error) {
    throw error;
  }
};

export default Business;
