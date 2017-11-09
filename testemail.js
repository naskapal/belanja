const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'co.terbang@gmail.com',
        pass: 'rghjiqvotwqzgfgw'
    }
});

const mailOptions = {
  from: 'co.terbang@gmail.com', // sender address
  to: 'kono.utsukushi24@gmail.com', // list of receivers
  subject: 'Nodemailer test marquee', // Subject line
  html: '<h1>HAI PROS</h1>'// plain text body
};


transporter.sendMail(mailOptions, function (err, info) {
  console.log("masuk send mail");
   if(err)
     console.log(err)
   else
     console.log(info);
});