const asyncHandler = require("express-async-handler");
const Teacher = require("../models/teacher");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register teacher
//@route POST /teacher/register
//@access Private
const registerUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userAvailable = await Teacher.findOne({username});

    if(userAvailable){
        res.status(400);
        throw new Error("Already exists!");
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = await Teacher.create({
        username,
        password : hashedPassword
    });
    console.log(`User created ${teacher}`);

    if(teacher){
        res.status(201).json({user : teacher.username});
    }
    else{
        res.status(400);
        throw new Error("Data not valid");
    }
});

//@desc Login teacher
//@route POST /teacher/login
//@access Public
const getUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userAvailable = await Teacher.findOne({username});
    if(userAvailable && (await bcrypt.compare(password, userAvailable.password))){
        const accessToken = jwt.sign({
            user:{
                username : userAvailable.username
            }
        }, process.env.ACCESS_TOKEN,
        {expiresIn: "30m"}
        );
        res.status(200).json({
            accToken : accessToken
        });
    }
    else{
        res.status(401);
        throw new Error("Username or password incorrect");
    }
});

//@desc Current teacher
//@route GET /teacher/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {registerUser, getUser, currentUser};