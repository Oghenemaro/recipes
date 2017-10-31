
//need micheal's explanation'

import db from '../models/index';
const clients = db.Clients;

class users {
    static createUser (req, res){
        const {firstname, lastname, email, gender, phone_number} = req.body;
        return clients
          .create({
            firstname,
            lastname,
            email,
            gender,
            phone_number
          })
        .then (clients => res.status(201).send({
               success : true,
               message : "User Account Created",
               Client : clients.firstname + " " + clients.lastname
        }))
    }
    
    static getUsers (req, res){
        return res.status(200).send({status: true, clients });
    }
}

export default users;