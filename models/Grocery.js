const mongoose = require('mongoose');

const GrocerySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
		enum: [
			'Food',
			'Snacks',
			'Drinks',
			'Toiletries',
			'Cleaning agent',
			'Miscellanous',
		],
	},
	price: {
		type: mongoose.Types.Decimal128,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Grocery', GrocerySchema);
