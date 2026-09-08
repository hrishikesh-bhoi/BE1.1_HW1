const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    employeeImageUrl: String,
    position: String,
    idNo: String,
    DOB: Date,
    email: String,
    contactNumber: Number,
    address: String,
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;

