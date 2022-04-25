// const { Timestamp } = require("bson");
// const { timeStamp } = require("console");
const mongoose = require("mongoose");
// const { version } = require("process");

const SavingsAccountSchema = new mongoose.Schema( 
        {
            account_number : {type : Number , required : true, unique : true}
        },
        {
            balance : {type : Number , required : true}
        },
           {
            interestRate : {type : Number , required : true}
        },
        {
            createdAt : {type : Date, required : true}
        },
        {
            updatedAt : {type : Date, required : true}
        }     
);

const SavingsAccount = mongoose.model("savingsAccount", SavingsAccountSchema);
module.exports = SavingsAccount;