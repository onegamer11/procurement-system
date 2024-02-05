const mongoose = require("mongoose");
require('dotenv').config();
/**
 * This method is implemented to
 * get the database connection to
 * the system
 */



console.log(`MONGO_URI from .env: ${process.env.MONGO_URI}`);

const connectDB = async () => {
	let conn;
	try {
		if (conn == null) {
			conn = await mongoose.connect(process.env.MONGO_URI, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
			});
		}
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit();
	}
};

module.exports = connectDB;
