const Course = require("../models/Course")

module.exports.addCourse = (reqBody) => {
	let newCourse = new Course({
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price
	})

	return newCourse.save().then((newCourse, error) => {
		if(error){
			return false
	} else {
		const isAdmin = (reqBody.isAdmin);
		if(isAdmin == false){
			return false

		// change return true to else
		} else {
			return {access : new Course(reqBody)}
		}
	}
})
	
}

/* Activity:

2. In the controller, create a logic inside the addCourse function which will check if the user that is logged in is admin or not.
-If the user IS admin, continue with the creation of the course
-Else if the user is NOT admin, return false.
*/