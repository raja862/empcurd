const mongoose = require('mongoose');

//Schema definition
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        
    },
    address: {
        type: String,
        required: true,
     
    },
    // designation: {
    //     type: String,

    // },
    // mobileNumber: {
    //     type: String,
    
        
    // },
    // bloodGroup: {
    //     type: String
    // }
});

//Model creation
module.exports = mongoose.model('employees', employeeSchema);
