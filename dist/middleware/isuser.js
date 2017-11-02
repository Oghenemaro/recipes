'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var users = _index2.default.users;
//what does this represent?
var secret_key = 'supersecretkey';

var Session = function () {
  function Session() {
    _classCallCheck(this, Session);
  }

  _createClass(Session, null, [{
    key: 'checkUser',
    value: function checkUser(req, res, next) {
      //    create variable to hold verification check
      var verify_jwt = void 0;
      try {
        //      attempt to verify token
        verify_jwt = _jsonwebtoken2.default.verify(req.token, secret_key);
        console.log("verify_jwt: " + verify_jwt);
      } catch (error) {
        res.status(401).send({ status: 'failed', message: 'Unauthorized User, provide correct information' });
      }

      //    if token id not present
      //    cover with try catch
      if (!verify_jwt.id) {
        var error = res.status(403).send({ status: 'failed', message: 'Invalid token' });
        next(error);
      } else {
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
  }]);

  return Session;
}();

exports.default = Session;