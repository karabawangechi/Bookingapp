const express = require('express');

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
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
