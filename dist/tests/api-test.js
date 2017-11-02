'use strict';

//necessary imports for test to work
var expect = require('chai').expect;
var superTest = require('supertest');
var mainApp = require('../controller/recipe');
var server = require('../../app');

//get api and run it through supertest
var request = superTest(server);

//cover for all test cases
describe("Test for Api routes", function () {
    //    object to hold raw data that'll work with test
    var record = {};
    //    beforeEach() runs its program before each test cases
    beforeEach(function () {
        record = {
            id: 1,
            upvote: 20,
            downvote: 5,
            meal: "stew",
            ingredients: ["Tomatoes", "Maggi", "Pepper", "salt", "corry"],
            description: "Sauce for other meals"
        };
    });
    //    test case to retrieve all recipe 
    it("should return done ' ", function (done) {
        request.get('/api/v1/recipe').end(function (err, res) {
            expect(res).to.be.an('object');
            done();
        });
    });
    //    test case for create endpoint
    it("should return done' ", function (done) {
        request.post('/api/v1/recipe').send(record).end(function (err, res) {
            expect(res).to.be.an('object');
            done();
        });
    });
    //    test case for delete endpoint
    it("should return done' ", function (done) {
        request.delete('/api/v1/recipe/:recipeid').send(record).end(function (err, res) {
            expect(res).to.be.an('object');
            done();
        });
    });
    //    test case for update endpoint
    it("should return done' ", function (done) {
        request.put('/api/v1/recipe/:recipeid').send(record).end(function (err, res) {
            expect(res).to.be.an('object');
            done();
        });
    });
});