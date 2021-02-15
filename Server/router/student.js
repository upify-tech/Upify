const express = require('express');
const router = new express.Router();
const Job = require('../models/UploadJobs');
const Internship = require('../models/UploadInternships')
const Course= require('../models/UploadCourses')
const Student = require('../models/students');
const Webinar =require('../models/UploadWebinars');
const mail=require('../mail')
const Register = require('../models/register');
const bcrypt = require("bcryptjs");

router.get("/",async (req,res)=>{
    //res.send("Home Page");
    try{
        const Data = await Student.find();
        res.status(201);
        res.send(Data);
        
    }catch(err){
        res.send(err);

    }
})

// Registering new students
// router.post('/students',(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{res.status(201).send(user)})
//     .catch((err)=>{res.send(err)})
// })

// using async and await
// router.post('/students', async (req,res)=>{
//     try{
//     console.log(req.body);
//     const user = new job(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//     }catch(err){res.send(err)};
// })

// reading student data 
// router.get("/students/api",async (req,res)=>{
//     try{
//         const studentData = await Student.find();
//         res.status(200,{"Content-Type":"text/json"});
//         res.send(studentData);
        
//     }catch(err){
//         res.send(err);

//     }
// })

//TESTING DB
router.get("/uploadjob",async (req,res)=>{
    try{
        const jobData = await Job.find();
        res.status(201);
        res.send(jobData);
        
    }catch(err){
        res.send(err);

    }
})
router.get("/uploadwebinar",async (req,res)=>{
    try{
        const webData = await Webinar.find();
        res.status(201);
        res.send(webData);
        
    }catch(err){
        res.send(err);

    }
})
router.get("/uploadcourses",async (req,res)=>{
    try{
        const coData = await Course.find();
        res.status(201);
        res.send(coData);
        
    }catch(err){
        res.send(err);

    }
})
router.get("/uploadinternship",async (req,res)=>{
    try{
        const internData = await Internship.find();
        res.status(201);
        res.send(internData);
        
    }catch(err){
        res.send(err);

    }
})
router.post("/uploadjob",async (req,res)=>{
    try{
        const job=new Job(req.body);    
        const createJob=await job.save();
        res.status(201).send(createJob);
        mail(web);
    }catch(err){
        console.log(err);
    }
})
router.post("/uploadwebinar",async (req,res)=>{
    try{
        const web=new Webinar(req.body);    
        const createJob=await web.save();
        res.status(201).send(createJob);
        mail(web);
    }catch(err){
        console.log(err);
    }
})
router.post("/uploadcourses",async (req,res)=>{
    try{
        const c=new Course(req.body);    
        const createJob=await c.save();
        res.status(201).send(createJob);
        mail(web);
    }catch(err){
        console.log(err);
    }
})
router.post("/uploadinternship",async (req,res)=>{
    try{
        const intern=new Internship(req.body);    
        const createJob=await intern.save();
        res.status(201).send(createJob);
        mail(web);
    }catch(err){
        console.log(err);
    }
})
//END TESTING DB


//LOGIN AND REGISTRATION
// using async and await
router.post('/register', async (req,res)=>{
    try{
    console.log(req.body);
    const user = new Register(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    }catch(err){res.send(err)};
})


// router.post('/login', async (req,res)=>{
//     try{
//         const username = req.body.username;
//         const password = req.body.password;
//         const userData = await Register.findOne({username:username});
//         const isMatch = await bcrypt.compare(password,userData.password);
//         if(!userData){
//             console.log("Invalid User");
//         } else {
//             if(isMatch){
//             console.log("password matching");
//         } else {
//             console.log("password not matching");
//         }
//     }
//         res.status(201).send(userData);
//     }catch(err){res.send(err)};
// });



// router.get('/login',async (req,res)=>{
//     try{
//         res.status(201).send("This is login");
//     }catch(err){
//         res.status(400).send(err);
//     }
// })

// reading student data 
router.get("/register",async (req,res)=>{
    try{
        const registerData = await Register.find();
        res.status(200,{"Content-Type":"text/json"});
        res.send(registerData);
        
    }catch(err){
        res.send(err);
    }
})

// reading data of specific student using id
router.get("/register/:username",async (req,res)=>{
    try{
        const username = req.params.username;
        const getData = await Register.findOne({username:username});
        res.status(201).send(getData);
    }catch(err){
        res.status(500).send(getData);
    }
})






// reading data of specific student using id
// router.get("/students/:id",async (req,res)=>{
//     try{
//         const id = req.params.id;
//         const getData = await Student.findById(id);
//         res.status(201).send(getData);
//     }catch(err){
//         res.status(500).send(getData);
//     }
// })

// deleting data 
// router.delete('/students/:id',async (req,res)=>{
//     try{
//         const id = req.params.id;
//         const deleteData = await Student.findByIdAndDelete(id);
//         if(!req.params.id){
//             return res.status(400).send();
//         }
//         res.status(201).send(deleteData);
//     }
//     catch(err){
//         res.status(500).send(err);
//     }
// })

// updating data
// router.patch('/students/:id',async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const upadateData = await Student.findByIdAndUpdate(id,req.body,{new : true});
//         res.send(updateData);

//     }catch(err){
//         res.status(400).send(err);
//     }
// })

module.exports = router