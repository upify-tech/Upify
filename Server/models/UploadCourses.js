const mongoose = require('mongoose');

const PostCourseSchema=mongoose.Schema({
    title:{
        type:String
    },
    tutor_name:{
        type:String
    },
    about_tutor:{
        type:String
    },
    domain:{
        type:String
    },
    description:{
        type:String
    },
    prerequisites:{
        type:String
    },
    duration:{
        type:String
    },
    paid_unpaid:{
        type:String
    },
    link:{
        type:String
    },
    

})

const Course=new mongoose.model("Course",PostCourseSchema)

module.exports=Course;
