import Recipe from '../controller/recipe';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}));
    
    app.get('/api/v1/recipe', Recipe.getRecipes);
    app.get('/api/v1/recipe', Recipe.getRecipesWithHighestUpvote);
    app.post('/api/v1/recipe', Recipe.createRecipe);
    app.put('/api/v1/recipe/:recipeid', Recipe.updateRecipe);
    
    
};

