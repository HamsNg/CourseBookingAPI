const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

	firstName : {
		type: String,
		required : [true, "Course Firstname  is Required!"]
	},
	lastName : {
		type: String,
		required : [true, "Course Lastname  is Required!"]
	},
	email : {
		type: String,
		required : [true, "Course Email  is Required!"]
	},
	password : {
		type: String,
		required : [true, "Course Password  is Required!"]
	},
	isAdmin : {
		type: Boolean,
		default: false
	},
	mobileNo : {
		type: String,
		required : [true, "Course MobileNo  is Required!"]
	},
	enrollments: [{
		courseId : {
			type: String,
			required: [true, "CourseId  is Required!"]
		},
		enrolledOn: {
			type: Date,
			default: new Date()
		},
		status: {
			type: String,
			default: "Enrolled"
		}
}]

})

module.exports = mongoose.model("User", userSchema);
