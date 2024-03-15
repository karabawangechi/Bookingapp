const mongoose =require('mongoose');

const businessSchema = new mongoose.Schema(
    {
       
      name: {
          type: String,
        },

        email: {
            type: String,
            immutable: true,
            unique: true,
            required: true
        },
       password:{
        type: String
       }
    },
        
    { timestamps: true }
);

module.exports  = mongoose.model('Business', businessSchema);
