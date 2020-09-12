const express = require('express');
const router = express.Router();

//require Groceries model
const Grocery = require('../../models/Grocery');

// @route GET api/groceries
// @DESC get all groceries
router.get('/', async (req, res) => {
	try {
		const groceries = await Grocery.find().sort({ date: -1 });
		res.json(groceries);
	} catch (error) {
		console.error('object not found', error);
		res.sendStatus(404);
	}
});

module.exports = router;
