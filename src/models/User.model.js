const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( 
        {
            firstName : {type : String , required : true}
        },
        {
            middleName : {type : String }
        },
           {
            lastName : {type : String , required : true}
        } ,
          {
            age : {type : Number , required : true}
        },
           {
            email : {type : Email , required : true}
        },
        {
            address : {type : String , required : true}
        },
        {
            gender : {type : String , required : false,  default: "Female"}
        },
        {
            type: {type: String, required: true, default: "customer"}
        },
        {
            createdAt : {type : Date, required : true}
        },
        {
            updatedAt : {type : Date, required : true}
        }

)

const User = mongoose.model("user", UserSchema);
module.exports = User;