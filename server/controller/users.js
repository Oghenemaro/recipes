
//need micheal's explanation'

import db from '../models/index';
import jwt from 'jsonwebtoken';

const clients = db.Clients;

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
        return clients
          .create({
            firstname,
            lastname,
            email,
            gender,
            password
          })
        .then (clients => res.status(201).send({
               success : true,
               message : "User Account Created",
               Client : clients.firstname + " " + clients.lastname
        }))
//      needs catch statement
    }
  
  
  
  
  
  static signin (req, res){
//    find user
    clients.findOne({
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
    
  
  
  
    static getUsers (req, res){
        return res.status(200).send({status: true, feed: clients });
    }
}

export default users;