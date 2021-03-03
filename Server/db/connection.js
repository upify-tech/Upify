const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://miniproject:miniproject@upify.ketn8.mongodb.net/upifydbfinal?retryWrites=true&w=majority",{useFindAndModify:false,useCreateIndex:true,useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{console.log("db connected");})
.catch((err)=>{console.log("db not connected");})


