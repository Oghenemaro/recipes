const assert = require('chai').expect;
const superTest = require('supertest');
const mainApp = require('../controller/recipe');
const server = require('../app');

//get api and run it through supertest
const request = superTest(server);


describe("Test for Api routes", function(){
    let record = {};
    beforEach( () => {
        record  =     {
                        id: 1,
                        upvote: 20,
                        downvote: 5,
                        meal: "stew",
                        ingredients: ["Tomatoes", "Maggi", "Pepper", "salt", "corry"],
                        description: "Sauce for other meals",
                    }
    });
       it("should return ' ", (done) => {
           request.get('/api/v1/recipe')
           .end((err, res) => {
               expect(res).to.be.an('object');
               done();
           });
       });
    
//    
//    
//    describe("handle Incorrect Input", function(){
//       it("should  ", function(){
//           assert.equal(mainApp.rainDrops("Value"), "Value must be a number");
//       });
//
//    });
//    
//    describe("Handles values without 3, 5, 7 as prime factors", function(){
//
//    });
})
    
