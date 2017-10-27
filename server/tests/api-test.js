const expect = require('chai').expect;
const superTest = require('supertest');
const mainApp = require('../controller/recipe');
const server = require('../../app');

//get api and run it through supertest
const request = superTest(server);


describe("Test for Api routes", function(){
    let record = {};
//    beforeEach() runs its program before each test cases
    beforeEach( () => {
        record  =     {
                        id: 1,
                        upvote: 20,
                        downvote: 5,
                        meal: "stew",
                        ingredients: ["Tomatoes", "Maggi", "Pepper", "salt", "corry"],
                        description: "Sauce for other meals",
                    }
    });
//    test case for create endpoint
       it("should return done ' ", (done) => {
           request.get('/api/v1/recipe')
           .end((err, res) => {
               expect(res).to.be.an('object');
               done();
           });
       });
    //    test case for create endpoint
        it("should return done' ", (done) => {
           request.post('/api/v1/recipe')
           .send(record)
           .end((err, res) => {
               expect(res).to.be.an('object');
               done();
           });
       });
    //    test case for delete endpoint
        it("should return done' ", (done) => {
           request.delete('/api/v1/recipe/:recipeid')
           .send(record)
           .end((err, res) => {
               expect(res).to.be.an('object');
               done();
           });
       });
    //    test case for update endpoint
      it("should return done' ", (done) => {
           request.put('/api/v1/recipe/:recipeid')
           .send(record)
           .end((err, res) => {
               expect(res).to.be.an('object');
               done();
           });
       });
    

})
    
