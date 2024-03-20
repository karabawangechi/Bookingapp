
app.use("/ussd", require("./routes/ussd"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
