'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var recipe = _index2.default.recipes;
var reviews = _index2.default.reviews;

var recipes = function () {
  function recipes() {
    _classCallCheck(this, recipes);
  }

  _createClass(recipes, null, [{
    key: 'addRecipe',
    value: function addRecipe(req, res) {
      var _req$body = req.body,
          recipe_name = _req$body.recipe_name,
          ingredients = _req$body.ingredients,
          description = _req$body.description,
          userID = _req$body.userID;

      recipe.create({
        recipe_name: recipe_name,
        ingredients: ingredients,
        description: description,
        userID: req.body.userID
      }).then(function (recipe) {
        return res.status(201).json(recipe);
      }).catch(function () {
        return res.status(400).json({ status: 'Failed.', error: 'Could not add.' });
      });
    }
  }, {
    key: 'editRecipe',
    value: function editRecipe(req, res) {
      recipe.findById(req.params.id).then(function (recipes) {
        console.log(req.body['userID']);
        if (recipes.userID !== req.body['userID']) {
          return res.status(400).json({ status: 'Failed', message: 'You are not authorized to edit this recipe!!!!' });
        }
        if (recipes.userID === req.body['userID']) {
          var _req$body2 = req.body,
              recipe_name = _req$body2.recipe_name,
              ingredients = _req$body2.ingredients,
              description = _req$body2.description;

          recipes.update({
            recipe_name: recipe_name, ingredients: ingredients, description: description
          }).then(function (recipe) {
            return res.status(201).json(recipe);
          }).catch(function () {
            return res.status(400).json({ status: 'Failed.', error: 'Could not update recipe' });
          });
        }
      });
    }
  }, {
    key: 'deleteRecipe',
    value: function deleteRecipe(req, res) {
      recipe.findById(req.params.id).then(function (recipe) {
        console.log(req.params.id);
        console.log(recipe.userID);
        if (recipe.userID !== req.body['userID']) {
          return res.status(400).json({ status: 'Failed', message: 'You are not authorized to delete this recipe!!!!' });
        }
        if (recipe.userID === req.body['userID']) {
          recipe.destroy({ force: true }).then(function (recipe) {
            return res.status(201).json({ status: 'Successful', error: 'Record Deleted' });
          }).catch(function () {
            return res.status(400).json({ status: 'Failed.', error: 'Could not delete recipe' });
          });
        }
      });
    }
  }, {
    key: 'getRecipes',
    value: function getRecipes(req, res) {
      recipe.findAll().then(function (recipes) {
        return res.status(200).json({ status: 'successful', message: recipes });
      });
    }
  }, {
    key: 'postReview',
    value: function postReview(req, res) {
      recipe.findById(req.params.id).then(function (recipe) {
        console.log(req.body['userID']);
        if (!recipe) {
          return res.status(401).json({ status: 'failed', message: "Recipe Dosen't Exist" });
        }
        var _req$body3 = req.body,
            review = _req$body3.review,
            recipeID = _req$body3.recipeID,
            userID = _req$body3.userID;

        reviews.create({
          review: review,
          recipeID: req.params.id,
          userID: req.body.userID
        }).then(function (recipe) {
          return res.status(201).json(review);
        }).catch(function () {
          return res.status(400).json({ status: 'Failed.', error: 'Could not update recipe' });
        });
      });
    }
  }]);

  return recipes;
}();

exports.default = recipes;