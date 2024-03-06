const asyncHandler = require("express-async-handler")
const ResultManagement = require("../models/student");

//@desc Get all results
//@route GET /results
//@access Private
const getResult = asyncHandler(async (req, res) => {
    const results = await ResultManagement.find();
    res.status(200).json({
        AllResults: results
    });
    });

//@desc Get specific result
//@route POST /results/:id
//@access Public
const getResultById = asyncHandler(async (req, res) => {
    const { roll_no, dob } = req.body;
    // const fieldName = 'roll_no';
    // const fieldValue = req.params.roll;
    // const query = { [fieldName]: fieldValue};
    // const query = {roll_no}; 

    const result = await ResultManagement.findOne({roll_no});
    // const exisingStudent = await ResultManagement.findOne({roll_no});

    if(!result){
        res.status(404);
        throw new Error("Roll number not found!");
    }
    if(result.dob !== dob){
        res.status(401);
        throw new Error("Invalid roll number or date of birth!");
    }
    res.status(201).json({
        message: `The details for id:${roll_no}`,
        resultDetails: result,
    });
});

//@desc Create all results
//@route POST /results
//@access Private
const createResult = asyncHandler(async (req, res) => {
    const { name, roll_no, dob, maths, english, physics, chemistry, cs, status } = req.body;

    const exisingStudent = await ResultManagement.findOne({roll_no});

    if(exisingStudent){
        res.status(400);
        message : "Roll number already exists!";
        throw new Error("Roll number already exists!");
    }

    if (!name || !roll_no || !dob || !status || !english || !cs || !physics || !chemistry || !maths) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }

    const result = await ResultManagement.create({
        name,
        roll_no,
        dob,
        maths,
        english,
        physics,
        chemistry,
        cs,
        status
    })

    res.status(201).json({
        message: "New entry!",
        result
    });
});

//@desc Update specific result
//@route PUT /results/:id
//@access Private
const updateResult = asyncHandler(async (req, res) => {
    const { name, roll_no, dob, maths, english, physics, chemistry, cs, status } = req.body;
    const fieldName = 'roll_no';
    const fieldValue = req.params.roll;
    const query = {[fieldName] : fieldValue}; 

    // const exisingStudent = await ResultManagement.findOne({roll_no});

    // if(exisingStudent){
    //     res.status(400);
    //     throw new Error("Roll number already exists!");
    // }

    if (!name || !roll_no || !dob || !status || !english || !cs || !physics || !chemistry || !maths) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }

    const result = await ResultManagement.findOne(query);

    if(!result){
        res.status(404);
        throw new Error("Roll number not found, create a new record!")
    }

    const updatedResult = await ResultManagement.findOneAndUpdate(
        query,
        // req.params.roll,
        req.body,
        {new : true}
    )
    res.status(201).json({
        message: `Details updated for id:${req.params.roll}`,
        updatedResult
    });
});

//@desc Delete specific result
//@route DELETE results/:id
//@access Private
const deleteResult = asyncHandler(async (req, res) => {
    const fieldName = 'roll_no';
    const fieldValue = req.params.roll;
    const query = { [fieldName]: fieldValue}; 

    const result = await ResultManagement.findOneAndDelete(query);

    if(!result){
        res.status(404);
        throw new Error("Roll number not found!");
    }

    // await ResultManagement.remove();

    res.status(200).json({
        message: `Details deleted for id:${req.params.roll}`,
        result
    });
});

module.exports = { getResult, getResultById, createResult, updateResult, deleteResult };