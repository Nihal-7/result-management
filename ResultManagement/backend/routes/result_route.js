const express = require("express");
const router = express.Router();
const {getResult, getResultById, createResult, updateResult, deleteResult} = require("../controller/resultController");
const validateToken = require("../middleware/jwtTokenHandler");

router.route("/").get( getResult).post(validateToken, createResult);

router.route("/:roll").post(getResultById).put( updateResult).delete( deleteResult);

module.exports = router;

// we just have to write validateToken before every function name for example - 
// router.route("/").get(validateToken, getResult).post(validateToken, createResult);
// router.route("/:roll").post(getResultById).put(validateToken, updateResult).delete(validateToken, deleteResult);
// for validating with the jwt bearer token which are only provided to the teacher user
// but due to some last minute frontend issue the validate token has been removed from the server.