import recipe from  '../model/recipe';

class Recipe {
    
    static getRecipes (req, res) {
        res.status(201).send({status: true, feed: recipe });
    }
    
    static getRecipesWithHighestUpvote (req, res) {
        
    }
    
    static createRecipe (req, res) {
        //push new record to dummy storage
        recipe.push({
//            increments id by 1 to its current length
            id: recipe.length + 1,
            sends 
            meal: req.body.meal,
            ingredients: req.body.ingredients,
            description: req.body.description
        });
        //return successful message
        res.status(200).send({ status: true, message: recipe.slice(-1) });
    }
    
    static updateRecipe (req, res) {
        for(let i = 0; i <= recipe.length; i += 1){
            if(recipe[i].id == req.params.recipeid) {
                    recipe[i].meal = req.body.meal;
                    recipe[i].ingredients = req.body.ingredients;
                    recipe[i].description = req.body.description;
                
                    return res.status(200).send({ status: true, message: recipe[i] });    
            }
        }
    }
    
    static deleteRecipe (req, res) {
        for(let i = 0; i <= recipe.length; i += 1){
            if(recipe[i].id == parseInt(req.params.recipeid, 10)) {
                    recipe[i].slice(i, 1);
                    return res.status(200).send({ status: true, message: recipe[i] });    
            }
        }
    }
}

export default Recipe;