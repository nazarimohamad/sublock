const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/contact', (req, res) => {

    const output = `
      <p>New message for boylando company</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
      `;
      console.log(req.body)

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'nazari.mhd21@gmail.com', // generated ethereal user
          pass: 'Picker.21' // generated ethereal password
        }
      });
      let info = transporter.sendMail({
        from: req.body.email, // sender address
        to: 'ryannazari21@gmail.com', // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      }, (err, res) => {
        if(err) {
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({msg: 'success'})
        }
      });

      console.log("Message sent: %s", info.messageId);
})



app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === "production") {
  app.get('*', function(req, res){
    res.sendFile(express.static(path.join(__dirname, 'client', 'build', 'index.html')))
  })
}

app.listen(PORT, function() {
  console.log(`server is running on port ${PORT}`)
});