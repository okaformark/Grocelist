const mongoose = require('mongoose');

// connect to mongodb
const connection = async () => {
	try {
		const connectToDB = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log(`DB Connected on ${connectToDB.connection.host}`);
	} catch (err) {
		console.log(`connection error, ${err}`);
		process.exit(1);
	}
};

module.exports = connection;
