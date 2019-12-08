const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;
const USER_EMAIL = process.env.USER_EMAIL;
const USER_PASS = process.env.USER_PASS;


app.use(cors());
app.use(bodyParser.json());

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
        secure: false,
        auth: {
          user: USER_EMAIL,
          pass: USER_PASS
        }
      });
      let info = transporter.sendMail({
        from: req.body.email,
        to: 'ryannazari21@gmail.com',
        subject: "Hello ✔",
        text: "Hello world?",
        html: output
      });
      console.log("Message sent");
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