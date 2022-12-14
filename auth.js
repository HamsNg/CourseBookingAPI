const jwt = require("jsonwebtoken");
const secret = "CourseBookingAPI";

// To create a token using jsonwebtoken package from NPM
module.exports.createAccessToken = (user) => {
	const data = {
		id : user._id,
		email : user.email,
		isAdmin : user.isAdmin
	}


	return jwt.sign(data, secret, {});
};

// To verify a token from the request/from postman
module.exports.verify = (request, response, next) => {
	let token = request.headers.authorization 

	if(typeof token !== "undefined"){
		console.log(token)
		//Beare <actual-token>
		token = token.slice(7, token.length)
		// <actual-token>


		// To verify the token using jwt, it requires the acqual token and the secret key that used to create it
		return jwt.verify(token, secret, (error, data) => {
			if (error){
				return response.send({
					auth: "Failed."
				})
			}else{
				next()
			}
		})
	} else {
		return null
	}
}

// To decode the user details from the token
module.exports.decode = (token) => {
	if(typeof token !== "undefined"){
		token = token.slice(7, token.length)

		return jwt.verify(token, secret, (error, data) => {
			if(error){
				return null
			} else{
				return jwt.decode(token, {complete: true}).payload
			}
		})
	} else {
		return null
	}
}
