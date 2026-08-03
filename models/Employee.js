const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String
    },

    department: {
        type: String
    },

   role:{
    type:String,
    enum:[
        "Admin",
        "Sales Manager",
        "Sales Executive"
    ],
    default:"Sales Executive"
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


module.exports = mongoose.model("Employee", employeeSchema);