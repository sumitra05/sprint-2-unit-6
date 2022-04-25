const express = require("express");
const connect = require("./configs/db");
const app = express();

const userController = require("./controllers/user.controller");
const branchDetailController = require("./controllers/BranchDetails.controllers");
const masterAccountController = require("./controllers/MasterAccount.controller");
const savingAccountController = require("./controllers/SavingsAccount.controller");
const fixedAccountController = require("./controllers/FixedAccount.controller");

app.use(express.json());

app.use("/users", userController);
app.use("/branchDetails", branchDetailController);
app.use("/masterAccounts", masterAccountController);
app.use("/savingsAccounts", savingAccountController);
app.use("/fixedAccounts", fixedAccountController);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});