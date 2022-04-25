const express = require("express");
const router = express.Router();

const MasterAccount = require("../models/MasterAccount.model");

router.get("/", async (req, res) => {
  try {
    const masterAccount = await MasterAccount.find();
    return res.send(masterAccount);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;