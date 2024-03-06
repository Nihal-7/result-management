const express = require("express");
const mongoose = require("mongoose")
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const url = process.env.DATABASE_CONNECTION_STRING;

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true 
}
app.use(cors(corsOptions));

mongoose.connect(url,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log("DB connected successfully");
})

app.use(express.json());
app.use("/results", require("./routes/result_route"));
app.use("/teacher", require("./routes/user_route"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
