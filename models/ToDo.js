const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	completed: {type: Boolean}
	
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;