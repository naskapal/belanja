const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static("views"))

app.get('/', function (req, res) {
  res.render('editprofile');
})

app.listen(3000, function () {
  console.log('IT WORKS!');
})
