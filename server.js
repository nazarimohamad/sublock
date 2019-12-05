const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === "production") {
  app.get('*', function(req, res){
    res.sendFile(express.static(path.join(__dirname, 'client', 'build', 'index.html')))
  })
}

app.listen(PORT, function() {
  console.log(`server is running on port ${PORT}`)
});