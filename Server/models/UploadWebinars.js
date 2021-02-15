const mongoose = require('mongoose');

const PostWebinarsSchema=mongoose.Schema({
    title:{
        type:String
    },
    speaker_name:{
        type:String
    },
    about_speaker:{
        type:String
    },
    domain:{
        type:String
    },
    description:{
        type:String
    },
    audience:{
        type:String
    },
    time:{
        type:String
    },
    date:{
        type:String
    },
    online_offline:{
        type:String
    },
    location:{
        type:String
    },
    link:{
        type:String
    },
    

})

const Webinar=new mongoose.model("Webinar",PostWebinarsSchema)

module.exports=Webinar;
