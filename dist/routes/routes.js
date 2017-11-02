'use strict';

var _recipe = require('../controller/recipe');

var _recipe2 = _interopRequireDefault(_recipe);

var _users = require('../controller/users');

var _users2 = _interopRequireDefault(_users);

var _recipes = require('../controller/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

var _isLoggedIn = require('../middleware/isLoggedIn');

var _isLoggedIn2 = _interopRequireDefault(_isLoggedIn);

var _isuser = require('../middleware/isuser');

var _isuser2 = _interopRequireDefault(_isuser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.get('/api', function (req, res) {
        return res.status(200).send({
            message: 'Welcome to More Recipes API!'
        });
    });

    //    endpoints for users
    app.post('/api/v1/users', _users2.default.createUser);
    app.get('/api/v1/users', _users2.default.getSpecificUsers);
    app.post('/api/v1/users/signin', _users2.default.signin);
    //  route checks for token availability then token originality before permission to add recipe
    app.post('/api/v1/recipes', _isLoggedIn2.default.checkLogin, _isuser2.default.checkUser, _recipes2.default.addRecipe);
    app.put('/api/v1/recipes/:id', _isLoggedIn2.default.checkLogin, _isuser2.default.checkUser, _recipes2.default.editRecipe);
    app.delete('/api/v1/recipes/:id', _isLoggedIn2.default.checkLogin, _isuser2.default.checkUser, _recipes2.default.deleteRecipe);
    //  retrieve all recipes
    app.get('/api/v1/recipes', _recipes2.default.getRecipes);
    //  review routes
    app.post('/api/v1/recipes/:id/reviews', _isLoggedIn2.default.checkLogin, _isuser2.default.checkUser, _recipes2.default.postReview);
    //    favorite routes
    app.post('/api/users/:id/recipes', _isLoggedIn2.default.checkLogin, _isuser2.default.checkUser, _users2.default.addToFavorite);
    app.get('/api/users/:id/recipes', _isLoggedIn2.default.checkLogin, _isuser2.default.checkUser, _users2.default.getFavorite);
};