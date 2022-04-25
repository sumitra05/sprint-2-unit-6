const express = require("express");
const router = express.Router();

const FixedAccount = require("../models/FixedAccount.model");

router.get("/", async (req, res) => {
  try {
    const fixedAccount = await FixedAccount.find();
    return res.send(fixedAccount);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;