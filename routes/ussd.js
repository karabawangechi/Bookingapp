const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("USSD");
});

router.post("/", (req, res) => {
  res.send("USSD");
});

module.exports = router;
