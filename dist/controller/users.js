'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//need micheal's explanation'

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var user = _index2.default.users;
var favorite = _index2.default.favorites;

var users = function () {
  function users() {
    _classCallCheck(this, users);
  }

  _createClass(users, null, [{
    key: 'createUser',

    //  sign up controller
    value: function createUser(req, res) {
      //      define this style of variable declaration?
      var _req$body = req.body,
          firstname = _req$body.firstname,
          lastname = _req$body.lastname,
          email = _req$body.email,
          gender = _req$body.gender,
          password = _req$body.password;

      if (password.length < 6) {
        return res.status(400).send({ status: false, message: "Password length must be greater than six (6)" });
      }

      //        bcrypt.hash(password, 5)
      //        .then(hash) => {
      //          
      //        }
      return user.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        gender: gender,
        password: password
      }).then(function (user) {
        return res.status(201).send({
          success: true,
          message: "User Account Created",
          Client: user.firstname + " " + user.lastname
        });
      });
      //      needs catch statement
    }
  }, {
    key: 'signin',
    value: function signin(req, res) {
      //    find user
      user.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (users) {
        if (!users) {
          return res.status(400).send({ message: 'User not found.' });
        } else if (users.password !== req.body.password) {
          return res.status(400).send({ message: 'Incorrect password.' });
        }
        var token = _jsonwebtoken2.default.sign({ id: users.id }, 'supersecretkey', { expiresIn: 1440 });
        return res.status(201).send({ status: 'Success.', token: token, message: 'Login successful.' });
      });
      //    needs catch statement
    }
  }, {
    key: 'addToFavorite',
    value: function addToFavorite(req, res) {
      var _req$body2 = req.body,
          recipeID = _req$body2.recipeID,
          userID = _req$body2.userID;
      //    console.log(userID)

      favorite.create({
        recipeID: recipeID,
        userID: req.body['userID']
      }).then(function (favorite) {
        return res.status(201).json({ status: 'Successful', data: favorite });
      }).catch(function () {
        return res.status(400).json({ status: 'Failed.', error: 'Could not add.' });
      });
    }
  }, {
    key: 'getFavorite',
    value: function getFavorite(req, res) {
      favorite.findAll({
        where: { userID: req.body['userID'] }
      }).then(function (favorites) {
        if (!favorites) {
          return res.status(401).send({ status: 'failed', feed: "You are not authorized" });
        }
        return res.status(201).json(favorites);
      }).catch(function () {
        return res.status(400).json({ status: 'Failed.', error: 'Error getting favorite.' });
      });
    }
  }, {
    key: 'getSpecificUsers',
    value: function getSpecificUsers(req, res) {
      return res.status(200).send({ status: true, feed: clients });
    }
  }]);

  return users;
}();

exports.default = users;