function checkLogin(req, res, next){
  if (req.session.loggedIn) {
    console.log(req.session);
    next()
  }else{
    res.redirect('/items')
  }
}

module.exports = checkLogin;