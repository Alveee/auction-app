const mongoose = require("mongoose");

const dbConnection = () => {
	console.log(process.env.ATLAS_URI);
	return mongoose.connect(process.env.ATLAS_URI).then(() => {
		console.log('Connected to database');
	}).catch(err => {
		console.log(err);
		throw new Error('Error connecting to database');
	});
};

module.exports = dbConnection;