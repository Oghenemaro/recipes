'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _recipe = require('../model/recipe');

var _recipe2 = _interopRequireDefault(_recipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Recipe = function () {
    function Recipe() {
        _classCallCheck(this, Recipe);
    }

    _createClass(Recipe, null, [{
        key: 'getRecipes',
        value: function getRecipes(req, res) {
            //        checks url for sort=upvotes  & order=desc
            if (req.query.sort == "upvotes") {
                if (req.query.order == 'desc') {
                    _recipe2.default.sort(function (recipe1, recipe2) {
                        return recipe1.upvotes - recipe2.upvotes;
                    });
                }
            } else {
                _recipe2.default.sort(function (recipe1, recipe2) {
                    return recipe1 - recipe2;
                });
            }
            return res.status(201).send({ status: true, feed: _recipe2.default });
        }
    }, {
        key: 'createRecipe',
        value: function createRecipe(req, res) {
            //push new record to dummy storage
            _recipe2.default.push({
                //            increments id by 1 to its current length
                id: _recipe2.default.length + 1,
                //            attachs body of message to specified appropriate key in dummy data
                meal: req.body.meal,
                ingredients: req.body.ingredients,
                description: req.body.description
            });
            //return successful message
            return res.status(200).send({ status: true + ": Record Inserted!!!", message: _recipe2.default.slice(-1) });
        }
    }, {
        key: 'updateRecipe',
        value: function updateRecipe(req, res) {
            for (var i = 0; i <= _recipe2.default.length; i += 1) {
                //            check if selected id = provided id
                if (_recipe2.default[i].id == req.params.recipeid) {
                    _recipe2.default[i].meal = req.body.meal;
                    _recipe2.default[i].ingredients = req.body.ingredients;
                    _recipe2.default[i].description = req.body.description;

                    return res.status(200).send({ status: true + ": Record Updated!!!", message: _recipe2.default[i] });
                }
            }
        }

        //    not working

    }, {
        key: 'deleteRecipe',
        value: function deleteRecipe(req, res) {
            for (var i = 0; i <= _recipe2.default.length; i += 1) {
                if (_recipe2.default[i].id == parseInt(req.params.recipeid, 10)) {
                    _recipe2.default.slice(i, 1);
                    return res.status(200).send({ status: true + ": Record Deleted!!!", message: _recipe2.default[i] });
                }
            }
        }

        //    not working
        //    static upVote(req, res) {
        //    for (let i = 0; i <= recipe.length; i += 1) {
        //      if (recipe[i].id == req.params.recipeid) {
        //        const counter = parseInt(req.body.upvotes, 10);
        //        recipe[i].upvotes += counter;
        //        return res.status(201).send({ status: 'Success.', message: 'Upvote successful.' });
        //      }
        //    }
        //  }

    }]);

    return Recipe;
}();

exports.default = Recipe;