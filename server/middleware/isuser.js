import jwt from 'jsonwebtoken';
import db from '../models/index';

const users = db.users;
//what does this represent?
const secret_key = 'supersecretkey';

class Session{
  
  static checkUser(req, res, next){
//    create variable to hold verification check
    let verify_jwt;
    try{
//      attempt to verify token
      verify_jwt = jwt.verify(req.token, secret_key);
      console.log("verify_jwt: " + verify_jwt);
    }
    catch(error){
      res.status(401).send({status: 'failed', message: 'Unauthorized User, provide correct information'});
    }
    
//    if token id not present
//    cover with try catch
    if(!verify_jwt.id){
       const error = res.status(403).send({status: 'failed', message: 'Invalid token'});
       next(error);
    }
    else {
//      if token id present
//      collect id an pass to request variable
      console.log('>>> JWT ' + verify_jwt.id);
      req.body['userID'] = verify_jwt.id;
      return next();
    }
    
//    
//    users.findById(verify_jwt.id)
//      .then((user) => {
//      console.log(verify_jwt);
////      token valid but user id not valid
//        if(!users){
//          const error = res.status(403).send({status: failed, message: 'Invalid token'});
//          next(error);
//        }
//      //find out what next() represent
//        req.userID = verify_jwt.id;
//        next();
//      
//      })
//      .catch( res.status(400).send({status: 'Application Error', message: 'could not run application at this time'}));
  }
  
}

export default Session;