const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		required : [true, "Course Name is Required!"]
	},
	description: {
		type: String,
		required: [true, "Description is required"]
	},
	price: {
		type: Number,
		required: [true, "Price is required"]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	enrollees: [{
		userId: {
			type: String,
			required: [true, "UserId is Required!"]
	},
	enrolledOn: {
		type: Date,
		default: new Date()
	}

	}]
})

module.exports = mongoose.model("Course", courseSchema);