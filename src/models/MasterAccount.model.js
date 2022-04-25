const mongoose = require("mongoose");

    const MasterAccountSchema = new mongoose.Schema( 
        {
            balance : {type : Number , required : true}
        },
        {
            createdAt : {type : Date, required : true}
        },
        {
            updatedAt : {type : Date, required : true}
        }
      
    )

    const MasterAccount = mongoose.model("masterAccount", MasterAccountSchema);
    module.exports = MasterAccount;