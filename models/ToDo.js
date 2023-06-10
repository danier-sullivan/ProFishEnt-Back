const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;