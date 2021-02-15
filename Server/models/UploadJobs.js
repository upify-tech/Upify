const mongoose = require('mongoose');

const PostJobSchema=mongoose.Schema({
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

const Job=new mongoose.model("Job",PostJobSchema)

module.exports=Job;
