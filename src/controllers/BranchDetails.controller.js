const express = require("express");
const router = express.Router();

const BranchDetail = require("../models/BranchDetails.model");

router.get("/", async (req, res) => {
  try {
    const branchDetail = await BranchDetail.find();
    return res.send(branchDetail);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;