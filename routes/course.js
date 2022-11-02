const express =require("express");
const router = express.Router();
const Course = require("../models/Course.js");
const courseController = require("../controllers/courseController.js");
const auth = require("../auth.js")

/*
Activity

1. Verify the token that should be provided in order to create a user.
2. In the controller, create a logic inside the addCourse function which will check if the user that is logged in is admin or not.
-If the user IS admin, continue with the creation of the course
-Else if the user is NOT admin, return false.


*/
router.post("/create", auth.verify, (req, res) => {
	// Always paired with auth.verify
	const data = {
		course: req.body,
		isAdmin: auth.decode(req.headers.authorization).isAdmin
	}

	courseController.addCourse(data).then(resultFromController => {
		res.send(resultFromController)
	})
})

module.exports = router