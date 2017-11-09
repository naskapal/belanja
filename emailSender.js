const nodemailer = require('nodemailer');


class Mail{
  constructor(destination, itemDetail){
    this.destination = destination
    this.itemDetail = itemDetail
  }
  
  send(){
    let transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
            user: 'co.terbang@gmail.com',
            pass: 'rghjiqvotwqzgfgw'
          }
    });
    
    let mailOptions = {
      from: 'co.terbang@gmail.com', // sender address
      to: this.destination, // list of receivers
      subject: 'Nodemailer test marquee', // Subject line
      html: `<p>halo, ${this.destination}, kamu telah sukses membeli ${this.itemDetail.name} sejumlah ${this.itemDetail.jumlah} dengan total harga ${this.itemDetail.total}
      terimakasih telah ber<strong>Belanja</strong></p>`// plain text body
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         console.log(err)
       else
         console.log(info);
    });
  }
}


module.exports = Mail;