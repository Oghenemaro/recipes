class isLoggedIn{
  static checkLogin(req, res, next){
//    locate token & store in variable
    req.token = req.body.token || req.headers.token || req.query.token;
//    if token absent prompt logging in
    if(!req.token){
      return res.status(403).send({status: 'failed', message: 'You are not logged in, please log in' });
    }
  next();
  }
}

export default isLoggedIn;