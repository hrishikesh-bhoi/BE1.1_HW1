const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    idNo: Number,
    DOB: Date,
    email: String,
    contactNumber: Number,
    address: String,
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;

