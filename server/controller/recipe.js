import recipe from  '../model/recipe';

class Recipe {
    
    static getRecipes (req, res) {
//        checks url for sort=upvotes  & order=desc
        if(req.query.sort == "upvotes"){
            if (req.query.order == 'desc') {
                recipe.sort((recipe1, recipe2) => recipe1.upvotes - recipe2.upvotes);
            }
        }else{
            recipe.sort((recipe1, recipe2) => recipe1 - recipe2);
        } 
        return res.status(201).send({status: true, feed: recipe });
    }

    
    static createRecipe (req, res) {
        //push new record to dummy storage
        recipe.push({
//            increments id by 1 to its current length
            id: recipe.length + 1,
//            attachs body of message to specified appropriate key in dummy data
            meal: req.body.meal,
            ingredients: req.body.ingredients,
            description: req.body.description
        });
        //return successful message
        return res.status(200).send({ status: true, message: recipe.slice(-1) });
    }
    
    static updateRecipe (req, res) {
        for(let i = 0; i <= recipe.length; i += 1){
//            check if selected id = provided id
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
                    recipe.slice(i, 1);
                    return res.status(200).send({ status: true, message: recipe[i] });    
            }
        }
    }
    
    static upVote(req, res) {
    for (let i = 0; i <= recipe.length; i += 1) {
      if (recipe[i].id == req.params.recipeid) {
        const counter = parseInt(req.body.upvotes, 10);
        recipe[i].upvotes += counter;
        return res.status(201).send({ status: 'Success.', message: 'Upvote successful.' });
      }
    }
  }

}

export default Recipe;