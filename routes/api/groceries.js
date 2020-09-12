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

//@route PUT api/groceries/:id
//@DESC update a grocery
router.put('/:id', async (req, res) => {
	try {
		const updatedGrocery = await Grocery.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true, runValidators: true }
		);
		res.json(updatedGrocery);
	} catch (error) {
		res.sendStatus(404).json(error);
	}
});

// @route post api/groceries
// @DESC post groceries
router.post('/', async (req, res) => {
	const newGrocery = new Grocery({
		name: req.body.name,
		category: req.body.category,
		price: req.body.price,
	});
	try {
		const grocery = await newGrocery.save();
		res.json(grocery);
	} catch (error) {
		console.error('object not found', error);
		res.sendStatus(404);
	}
});

//@route DELETE api/groceries/:id
//@DESC Delete a grocery
router.delete('/:id', async (req, res) => {
	try {
		await Grocery.findById(req.params.id).remove();
		res.sendStatus(200).json({ success: 'item deleted' });
	} catch (error) {
		res.sendStatus(404).json({ failed: 'not found' });
	}
});
module.exports = router;
