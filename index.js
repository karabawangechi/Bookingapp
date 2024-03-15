const mongoose = require ('mongoose');
const app = require('./express.js');
const express=require('express')
const router =express.Router
const routes=require('./index')
const url = 'mongodb+srv://paulotieno2:vzS0PqYiRk04IcN0@cluster0.g7hixbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

 //app.use('/')   

mongoose.set('strictQuery', false);
mongoose
  .connect(url)
  .then(() => {
    console.log('Database connected');
    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      console.log(`API listening on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

