const mongoose = require ('mongoose');
const express=require('express')
const router = express.Router
const businessRouter = require('./routes/index');
const url = 'mongodb+srv://paulotieno2:vzS0PqYiRk04IcN0@cluster0.g7hixbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const whitelist = [
    'http://localhost:3000',
  ];
  const { origin } = req.headers;
  if (whitelist.includes(origin)) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  }
  return next();
});

app.use('/api', businessRouter);

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