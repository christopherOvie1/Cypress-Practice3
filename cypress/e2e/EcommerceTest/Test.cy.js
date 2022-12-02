/// <reference types="cypress" />

// var should = require('chai').should()
//   var expect = require('chai').expect
//  var assert = require('chai').assert

describe('mocha validtions', () => {
   let name = 'chris'
    it('validate through should', () => {

        

        expect(name).to.equal('chris')
        expect(name).to.have.lengthOf(5)
        assert.equal(name,'chris')
        assert.lengthOf(name,5)

    })
})