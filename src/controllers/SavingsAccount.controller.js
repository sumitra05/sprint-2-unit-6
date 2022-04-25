const express = require("express");
const router = express.Router();

const SavingAccount = require("../models/SavingsAccount.model");

router.get("/", async (req, res) => {
  try {
    const savingAccount = await SavingAccount.find();
    return res.send(savingAccount);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;