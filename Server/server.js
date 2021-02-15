
const express = require('express');
require('./db/connection');
// const mail=require('./mail')
const router = require('./router/student');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/',router);
app.use(express.urlencoded({extended: false}))

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})










// // Import npm packages
// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 8080; // Step 1

// const routes = require('./routes/api');

// // Step 2
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/firstmongodb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose is connected!!!!');
// });

// // Data parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Step 3

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }


// // HTTP request logger
// app.use(morgan('tiny'));
// app.use('/api', routes);




// app.listen(PORT, console.log(`Server is starting at ${PORT}`));


// // // Import npm packages
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const morgan = require('morgan');
// // const path = require('path');

// // const app = express();
// // const PORT = process.env.PORT || 8080; // Step 1

// // app.use(morgan('tiny'));

// // // const mongodb_url="mongodb+srv://homeuser:miniproject@mydb.h4uag.mongodb.net/<dbname>?retryWrites=true&w=majority"
// // //connecting to db
// // mongoose.connect('mongodb://localhost/mern_tut',{
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true
// // })
// // mongoose.connection.on('connected',()=>{
// //     console.log("connection done")
// // })

// // //Route
// // app.get('/api',(req,res)=>{
// //     const data={
// //         username:'hello',
// //         age:5
// //     }
// //     res.json(data);
// // })
// // app.get('/api/name',(req,res)=>{
// //     const data={
// //         username:'hello world',
// //         age:5
// //     }
// //     res.json(data);
// // })

// // app.listen(PORT,console.log(`server is  starting at ${PORT}`));

// // //For running both react and node server simlyenoulsy
// // //add this in package.json "start": "concurrently \"command1 arg\" \"command2 arg\""
// // //"client":"cd client && npm start"
// // //"dev": "concurrently \"nodemon server.js\" \"npm run client\""
// // //finally npm run dev 