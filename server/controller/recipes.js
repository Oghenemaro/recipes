import db from '../models/index';
import jwt from 'jsonwebtoken';


const recipe = db.recipes;

class recipes{
//  create recipes
  //  sign up controller
  static addRecipe(req, res) {
      const {
        recipe_name, ingredients, description, clientsID} = req.body;
    console.log(clientsID)
       recipe
        .create({
          recipe_name,
          ingredients,
          description,
          clientsID: clientsID,
        })
        .then(recipe => res.status(201).json(recipe))
        .catch(() => res.status(400).json({ status: 'Failed.', error: 'Something here.' }));
    }
  
   static editRecipe(req, res){
     recipe.findById(req.params.id)
     
      .then((recipes) => {
       console.log(recipes.clientsID);
        if(recipes.clientsID !== req.body['clientsID']){
          return res.status(400).json({status: 'Failed', message: 'You are not authorized to edit this recipe!!!!'})
        }
        if(recipes.clientsID === req.body['clientsID']){
          const {recipe_name, ingredients, description} = req.body;
          recipes.update({
            recipe_name, ingredients, description,
          })
          .then(recipe => res.status(201).json(recipe))
          .catch(() => res.status(400).json({ status: 'Failed.', error: 'Could not update recipe' }));
          
        } 
      })
     

    }
  
  static deleteRecipe(req, res){
    recipe.findById(req.params.id)
      .then((recipe) => {
      console.log(req.params.id);
      console.log(recipe.clientsID);
        if(recipe.clientsID !== req.body['clientsID']){
          return res.status(400).json({status: 'Failed', message: 'You are not authorized to delete this recipe!!!!'})
        }
        if(recipe.clientsID === req.body['clientsID']){
          recipe.destroy({force : true})
          .then(recipe => res.status(201).json({ status: 'Successful', error: 'Record Deleted' }))
          .catch(() => res.status(400).json({ status: 'Failed.', error: 'Could not delete recipe' }))
        }
    })
  }
  
  static getRecipes(req, res){
    recipe.findAll()
      .then( (recipes) => {
        return res.status(200).json({status: 'successful', message: recipes})    
      })
  }
}
  

export default recipes;