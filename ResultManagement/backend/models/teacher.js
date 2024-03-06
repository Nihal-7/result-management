const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Please enter the username!"],
        unique : [true, "Username already exists"]
    },

    password : {
        type : String,
        required : [true, "Please enter the password!"]
    },
},
{
    timestamps : true
}
);

module.exports = mongoose.model("Teacher", teacherSchema);