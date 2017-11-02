'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isLoggedIn = function () {
  function isLoggedIn() {
    _classCallCheck(this, isLoggedIn);
  }

  _createClass(isLoggedIn, null, [{
    key: 'checkLogin',
    value: function checkLogin(req, res, next) {
      //    locate token & store in variable
      req.token = req.body.token || req.headers.token || req.query.token;
      //    if token absent prompt logging in
      if (!req.token) {
        return res.status(403).send({ status: 'failed', message: 'You are not logged in, please log in' });
      }
      next();
    }
  }]);

  return isLoggedIn;
}();

exports.default = isLoggedIn;