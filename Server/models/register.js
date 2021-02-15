const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const registerSchema = mongoose.Schema({
    username:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    interests: {
        type: Array
    }
});

// securing password bycryptjs

registerSchema.pre("save", async function(next) {
    
    if(this.isModified("password")){
        //console.log(`password enered is ${this.password}`);
        this.password = await bcrypt.hash(this.password,10);
        //console.log(`password after bcrypt ${this.password}`);
    }
    next();
});

const Register = new mongoose.model("register",registerSchema);

module.exports = Register;