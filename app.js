const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
})
app.listen(3000, function () {
  console.log('IT WORKS!');
})