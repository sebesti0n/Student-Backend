const mongoose =require('mongoose')
const validator =require('validator')

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    PhoneNo:{
        type:String,
        minlength:10,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        unique:true,
        validator(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid Email ID")
            }
        }

    },
    age:{
        type:Number,
        required:true
    }
});

const student = new mongoose.model("Student",studentSchema);

module.exports = student;