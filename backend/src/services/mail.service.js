import nodemailer from 'nodemailer';
export default function(to,text){
  console.log(to,text)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ludwinss@gmail.com',
      pass: 'ubdmzbaiawyummdg'
    }
  });

  var mailOptions = 
     {
    from: 'ludwinss@gmail.com',
    to: to,
    subject: 'Alert about a Tasks of Pastel Simulated',
    text:text
    }
  ; 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}
