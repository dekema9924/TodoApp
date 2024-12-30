const mongoose = require('mongoose')
const Userdb = require('../config/Userconfig')

const TodoSchema = new mongoose.Schema({
    title: String,
    progress: Number,
    iscomplete: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: Userdb
    }

})

module.exports = mongoose.model("Tododb", TodoSchema)