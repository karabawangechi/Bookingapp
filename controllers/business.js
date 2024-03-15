const business = require ('./models/business');

const getBusinesses ((req, res) => {
  return Doctors.find({}, '-__v');
  res.json(businesses)
})

const create = ((req, res){
  const newBusiness = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  business.save((err data) => {
    if(err){
      return res.json({error: err});
    }:
  return res.json({"message": "business created successfully", "status": 200})
  })
})

const getById = ((req, res){
  
})

const getBookings = ((req, res){
  
})
