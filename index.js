const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const git = require('simple-git')("../repo");

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
  }));

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {

   let x = git.diff();
   //console.log(JSON.parse(req.body.payload).before);
   console.log(x);
   res.send();
});
