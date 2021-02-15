const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/upifydb1",{useFindAndModify:false,useCreateIndex:true,useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{console.log("db connected");})
.catch((err)=>{console.log("db not connected");})