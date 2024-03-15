import mongoose from 'mongoose';

export const businessSchema = mongoose.Schema({

});

businessSchema.index({ name: 1 }, { unique: true });
const Business = mongoose.model('Business', businessSchema);

export default Business;
