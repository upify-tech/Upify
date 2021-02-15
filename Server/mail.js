var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');//for template

const mail=(data)=>{
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'upify.tech@gmail.com',
          pass: 'miniproject'
        }
      });
      
      //for template
      transporter.use('compile',hbs({
          viewEngine:'express-handlebars',
          viewPath:'./views',
      }));
      
      //mohammedsameeruddin272001@gmail.com,n6304249@gmail.com,
      var mailOptions = {
        from: 'upify.tech@gmail.com',
        to: 'mohdaijazahmed2000@gmail.com',
      //   cc:'',
        bcc:'mohammedsameeruddin272001@gmail.com,n6304249@gmail.com',
        subject: "UPIFY-TECH",
        text: `<h1>hello   jjjjj</h1>`,
      //   attachments:[
      //       {
      //           filename:'xyz.jpg',path:'./xyz.jpg'
      //       }
      //   ]
      
      //for template
      template:'index'
      
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
};

module.exports=mail;