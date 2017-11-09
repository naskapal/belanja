const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const app = express();

const items = require('./routers/item');
const user = require('./routers/user');
const transaksi = require('./routers/transaksi');
const profile = require('./routers/profile');


app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/static', express.static('public'))
app.use(session({
  secret: 'kapal',
  unset: 'destroy'
}))


app.use('/items', items)
app.use('/users', user)
app.use('/transaksi', transaksi)
app.use('/profiles', profile)


app.get('/', function (req, res) {
  res.redirect('/items');
})

app.listen(process.env.PORT || 3000, function () {
  console.log('IT WORKS!');
})
