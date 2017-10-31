import db from '../models/index';
import jwt from 'jsonwebtoken';

const recipe = db.recipes;

class recipes{
//  create recipes
  //  sign up controller
    static createRecipe (req, res){
        const {recipe_name, ingredients, description} = req.body;
      if(recipe_name == "" || ingredients == "" || description == ""){
        return res.status(400).send({status: false, message: "Enter all values"});
      }

        return recipe
          .create({
            recipe_name,
            ingredients,
            description,
          })
        .then (recipe => res.status(201).send({
               success : true,
               message : "Recipe Created",
               Recipe : recipe.recipe_name,
        }))
//      needs catch statement
    }
  
}