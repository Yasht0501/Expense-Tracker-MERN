const mongoose = require('mongoose')
const { type } = require('os')

//schema design
const adminSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required and should be unique"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
    },
    { timestamps: true }
);

//export
const adminModel = mongoose.model('admin', adminSchema)
module.exports = adminModel