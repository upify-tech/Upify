// const mongoose = require('mongoose');
// // const { default: Jobs } = require('../../client/src/Components/HomePage/HomeJobs');
// // const validator = require('validator');

// // const studentSchema = mongoose.Schema({
// //     name: {
// //         type: String,
// //         required: true,
// //         minlength:5
// //     },
// //     email: {
// //         type: String,
// //         required: true,
// //         unique: [true, "Email Id Already Present"],
// //         validate(value){
// //             if(!validator.isEmail(value)){
// //                 throw new Error("Invalid Email");
// //             }
// //         } 
// //     },
// //     phone:{
// //         type: Number,
// //         minlength:10,
// //         maxlength:10,
// //         required: true,
// //         unique: true
// //     },
// //     address:{
// //         type: String,
// //         required: true,
// //     }
// // })


// // const Student = new mongoose.model("Student",studentSchema);


// //module.exports=Student;

// const mernSchema = mongoose.Schema({
//     first:{
//         type: String
//     },
//     second:{
//         type: String
//     }
// })

// const PostInternshipSchema=mongoose.Schema({
//     title:{
//         type:String
//     },
//     location:{
//         type:String
//     },
//     req_skills:{
//         type:String
//     },
//     add_skills:{
//         type:String
//     },
//     stipend:{
//         type:String
//     },
//     education:{
//         type:String
//     },
//     description:{
//         type:String
//     },
//     duration:{
//         type:String
//     },
//     com_name:{
//         type:String
//     },
//     last_date:{
//         type:String
//     },

// })
// const PostJobsSchema=mongoose.Schema({
//     title:{
//         type:String
//     },
//     location:{
//         type:String
//     },
//     req_skills:{
//         type:String
//     },
//     add_skills:{
//         type:String
//     },
//     salary:{
//         type:String
//     },
//     education:{
//         type:String
//     },
//     description:{
//         type:String
//     },
//     duration:{
//         type:String
//     },
//     com_name:{
//         type:String
//     },
//     last_date:{
//         type:String
//     }
// })
// // const PostWebinarsSchema=mongoose.Schema({
// //     title:{
// //         type:String
// //     },
// //     audience:{
// //         type:String
// //     },
// //     time:{
// //         type:String
// //     },
// //     date:{
// //         type:String
// //     },
// //     description:{
// //         type:String
// //     },
// //     speaker_name:{
// //         type:String
// //     },
// //     speaker_bio:{
// //         type:String
// //     },

// // })
// const PostCoursesSchema=mongoose.Schema({
//     title:{
//         type:String
//     },
//     prerequisites:{
//         type:String
//     },
//     description:{
//         type:String
//     },
//     rating:{
//         type:String
//     },
//     tutor:{
//         type:String
//     },
//     course_duration:{
//         type:String
//     },
//     paid_unpaid:{
//         type:String
//     },


// })
// const Student = new mongoose.model("Mern",mernSchema);
// const Job=new mongoose.model("Job",PostJobsSchema)
// const internship=new mongoose.model("internship",PostInternshipSchema)
// // const webinar=new mongoose.model("webinar",PostWebinarsSchema)
// const course=new mongoose.model("course",PostCoursesSchema)

// // const a = new job({
//     // title:"a",
//     // location:"a",
//     // req_skills:"a",
//     // add_skills:"a",
//     // salary:"a",
//     // education:"a",
//     // description:"a",
//     // duration:"a",
//     // com_name:"a",
//     // last_date:"a"
    
// // })
// // a.save()
// // module.exports = Student,job,internship,webinar,course;
// module.exports=Job;
// //module.exports=Job;
// // module.exports={
// //     Jobs:"Jobs",
// //     Student:"Student"
// // }