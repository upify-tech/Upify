const mongoose = require('mongoose');

const PostInternshipSchema=mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    comp_name:{
        type:String
    },
    domain:{
        type:String
    },
    req_skills:{
        type:String
    },
    add_skills:{
        type:String
    },
    duration:{
        type:String
    },
    location:{
        type:String
    },
    education:{
        type:String
    },
    experience:{
        type:String
    },
    ctc:{
        type:String
    },
    link:{
        type:String
    },
    

})

const Internship=new mongoose.model("Internship",PostInternshipSchema)

module.exports=Internship;
