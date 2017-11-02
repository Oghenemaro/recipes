
//need micheal's explanation'

import db from '../models/index';
import jwt from 'jsonwebtoken';

const user = db.users;
const favorite = db.favorites;

class users {
//  sign up controller
    static createUser (req, res){
//      define this style of variable declaration?
        const {firstname, lastname, email, gender, password} = req.body;
        if(password.length < 6 ){
          return res.status(400).send({status: false, message: "Password length must be greater than six (6)"  });
        }
      
//        bcrypt.hash(password, 5)
//        .then(hash) => {
//          
//        }
        return user
          .create({
            firstname,
            lastname,
            email,
            gender,
            password
          })
        .then (user => res.status(201).send({
               success : true,
               message : "User Account Created",
               Client : user.firstname + " " + user.lastname
        }))
//      needs catch statement
    }
  
  
  
  
  
  static signin (req, res){
//    find user
    user.findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((users) => {
      if (!users) {
        return res.status(400).send({ message: 'User not found.' });
      } else if (users.password !== req.body.password) {
        return res.status(400).send({ message: 'Incorrect password.' });
      }
      const token = jwt.sign({ id: users.id }, 'supersecretkey', { expiresIn: 1440 });
      return res.status(201).send({ status: 'Success.', token, message: 'Login successful.' });
    })
//    needs catch statement
  }
    
  
  
  static addToFavorite (req, res){
     const {recipeID, userID} = req.body;
//    console.log(userID)
       favorite
        .create({
          recipeID,
          userID: req.body['userID']
        })
        .then(favorite => res.status(201).json(favorite))
        .catch(() => res.status(400).json({ status: 'Failed.', error: 'Could not add.' }));
  }
  static getFavorite (req, res){
    favorite
      .findAll({
        where: { userID: req.body['userID']}
    })
    
    .then((favorites) => { 
      if(!favorites){return res.status(401).send({status: 'failed', feed: "You are not authorized" });}
      return res.status(201).json(favorites)})
    .catch(() => res.status(400).json({ status: 'Failed.', error: 'Error getting favorite.' }));
  }
  
  
  
    static getSpecificUsers (req, res){
        return res.status(200).send({status: true, feed: clients });
    }
}

export default users;