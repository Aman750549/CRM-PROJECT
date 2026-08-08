const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String
    },

    company: {
        type: String
    },

    status: {
        type: String,
        enum: ["New", "Contacted", "Converted", "Lost"],
        default: "New"
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Lead", leadSchema);