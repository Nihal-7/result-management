const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: String,
    roll_no: {
        type : Number,
        unique : [true, "roll number already exists"],
    },
    dob : String,
    english: Number,
    cs : Number,
    physics : Number,
    chemistry : Number,
    maths : Number,
    status : String
},
{
    timestamps : true
}

);

module.exports = mongoose.model("ResultManagement", studentSchema);