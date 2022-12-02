//const { functions } = require("cypress/types/lodash")

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    //cy.wait(2000)
    cy.get('.product').should('have.length',5)
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
   // cy.get('@productLocator').find('.product').eq(3).contains('ADD TO CART').click()
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

     const textVeg= $el.find('h4.product-name').text()
      if(textVeg.includes('Carrot')){
       
        cy.wrap($el.find("button")).click();
      }
      
    })


const logo = cy.get(".brand").then(function(logoElement){
      
     cy.log(logoElement.text())

    })
    })
    
})



