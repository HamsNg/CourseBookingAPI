const Course = require("../models/Course")

module.exports.addCourse = (data) => {
	if (data.isAdmin) {
		let newCourse = new Course({
		name: data.course.name,
		description: data.course.description,
		price: data.course.price
		})

		return newCourse.save().then((newCourse, error) => {
			if(error){
				return error
		}
			return newCourse
	})
}

// If the user is not admin, then return this message as a promise to avoid errors
	let message = Promise.resolve(`User must be ADMIN to access this.`)

	return message.then((value) => {
		return value
	})
}









/* Activity:

2. In the controller, create a logic inside the addCourse function which will check if the user that is logged in is admin or not.
-If the user IS admin, continue with the creation of the course
-Else if the user is NOT admin, return false.
*/




/*
else {
		const isAdmin = (reqBody.isAdmin);
		if(isAdmin == false){
			return false

		} else {
			return {access : new Course(reqBody)}
		}
	}
*/