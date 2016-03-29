'use strict';

let should = require('should');
let controller = require('../../api/postController').controller;

describe('postController', () => {
    describe('getAll', () =>{
        it('Should return an array of 3', (done) => {
            let req = {};
            let res = {
                json: function(data) {
                    data.should.be.an.instanceOf(Array);
                    data.length.should.equal(3);
                    done();
                }
            };
            let next = function() {
                throw new Error("Called next error when it shouldn't have")
            };
            let post = {
                find: function() {
                    return {
                        exec: function(cb) {
                            cb(null, [1,2,3])
                        }
                    }
                }
            };
            controller(post).getAll(req, res, next);
        });
        it('Should return an Error', (done) => {
            let post = {
                find: function() {
                    return {
                        exec: function(cb) {
                            cb("ERROR ERROR RUN!!!!")
                        }
                    }
                }
            };
            let req = {};
            let res = {
                json: function() {
                    throw new Error('You should not be here');
                }
            };
            let next = function(err){
                err.should.equal('ERROR ERROR RUN!!!!');
                done();
            };
            controller(post).getAll(req, res, next);
        });
    });
    // describe('findOne', () => {
    //     it('Should return an object with an ID equal to 5', (done) => {
    //         let post = {};
    //         let req = {};
    //         let res = {};
    //         let next = function () {
    //
    //         };
    //     });
    // });
});
