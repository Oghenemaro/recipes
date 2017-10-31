import Recipe from '../controller/recipe';
import Users from '../controller/users';

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
    app.get('/api/v1/users', Users.getUsers);
    
    
};

