/// <reference types="cypress" />
//const { functions } = require("cypress/types/lodash")

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    
    cy.get('.products').as('productLocator')
   
    //parent child chaining
   // cy.get('@productLocator').find('.product').eq(3).contains('ADD TO CART').click()
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

     const textVeg= $el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      { 
        cy.wrap($el.find("button")).click();  
      }
          
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
  // cy.get('.cart-preview > .action-block > button').click()
   cy.get('.products > div > button').click()
    
    })
    
})



