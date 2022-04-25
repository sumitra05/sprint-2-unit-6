const mongoose = require("mongoose");


const connect = () => {
    return mongoose.connect("mongodb+srv://sumitra0523:<Sumitr@23_#>@cluster0.edomp.mongodb.net/clustor0?retryWrites=true&w=majority")
};

module.exports = connect;

// const mongoose = require("mongoose");

// const connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/test");
// };

// module.exports = connect;