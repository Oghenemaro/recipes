import db from '../models/index';
import jwt from 'jsonwebtoken';


const recipe = db.recipes;
const reviews = db.reviews;

class recipes{
  static addRecipe(req, res) {
      const {
        recipe_name, ingredients, description, userID} = req.body;
       recipe
        .create({
          recipe_name,
          ingredients,
          description,
          userID: req.body.userID
        })
        .then(recipe => res.status(201).json(recipe))
        .catch(() => res.status(400).json({ status: 'Failed.', error: 'Could not add.' }));
    }
  
   static editRecipe(req, res){
     recipe.findById(req.params.id)
     
      .then((recipes) => {
       console.log(req.body['userID']);
        if(recipes.userID !== req.body['userID']){
          return res.status(400).json({status: 'Failed', message: 'You are not authorized to edit this recipe!!!!'})
        }
        if(recipes.userID === req.body['userID']){
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
      console.log(recipe.userID);
        if(recipe.userID !== req.body['userID']){
          return res.status(400).json({status: 'Failed', message: 'You are not authorized to delete this recipe!!!!'})
        }
        if(recipe.userID === null){
          res.status(400).json({ status: 'Failed.', error: "Recipe Dosen't exist" })
        }
        if(recipe.userID === req.body['userID']){
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
  
  static postReview(req, res){
    recipe.findById(req.params.id)
      .then((recipe) => {
       console.log(req.body['userID']);
      if(!recipe){
        return res.status(401).json({status: 'failed', message: "Recipe Dosen't Exist"})    
      }
       const {review, recipeID, userID} = req.body;
       reviews.create({
         review, 
         recipeID: req.params.id, 
         userID: req.body.userID,
       })
        .then(recipe => res.status(201).json(review))
        .catch(() => res.status(400).json({ status: 'Failed.', error: 'Could not update recipe' }));
    })
  }

}
  

export default recipes;