import Recipe from '../controller/recipe';
import Users from '../controller/users';
import recipe from '../controller/recipes';
import isLoggedIn from '../middleware/isLoggedIn';
import Session from '../middleware/isuser';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes API!',
}));
    
//    api endpoints
//    app.get('/api/v1/recipe', Recipe.getRecipes);
//    app.post('/api/v1/recipe', Recipe.createRecipe);
//    app.put('/api/v1/recipe/:recipeid', Recipe.updateRecipe);
//    app.delete('/api/v1/recipe/:recipeid', Recipe.deleteRecipe);
//    app.post('/api/v1/recipe/:recipeId/upVote', Recipe.upVote)
//    app.get('/api/v1/recipe/:recipeid?sort=upvotes&order=desc', Recipe.getRecipes);
    
//    endpoints for users
    app.post('/api/v1/users', Users.createUser);
    app.get('/api/v1/users', Users.getSpecificUsers);
    app.post('/api/v1/users/signin',  Users.signin);
//  route checks for token availability then token originality before permission to add recipe
    app.post('/api/v1/recipes', isLoggedIn.checkLogin, Session.checkUser, recipe.addRecipe);
    app.put('/api/v1/recipes/:id', isLoggedIn.checkLogin, Session.checkUser, recipe.editRecipe);
    app.delete('/api/v1/recipes/:id', isLoggedIn.checkLogin, Session.checkUser, recipe.deleteRecipe);
//  retrieve all recipes
    app.get('/api/v1/recipes', recipe.getRecipes);
//  review routes
    app.post('/api/v1/recipes/:id/reviews', isLoggedIn.checkLogin, Session.checkUser, recipe.postReview);
//    favorite routes
    app.post('/api/users/:id/recipes', isLoggedIn.checkLogin, Session.checkUser, Users.addToFavorite);
    app.get('/api/users/:id/recipes', isLoggedIn.checkLogin, Session.checkUser, Users.getFavorite);
  
    
    
};

