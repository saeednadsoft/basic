const mongoose = require("mongoose")

const basicSchema = mongoose.Schema({
	first_name: String,
    middle_name: String,
	last_name: String
})

module.exports = mongoose.model("BasicModel", basicSchema)