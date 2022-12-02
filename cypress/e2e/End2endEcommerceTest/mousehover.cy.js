/// <reference types="cypress" />



describe('alertshhhh', () => {
    it('my first test', () => {


//cy.visit('http://qaclickacademy.com/practice.php')
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//contains  to locate pick the text
//appply jquery method it apply to its child element

//cy.get('.mouse-hover-content').invoke('show')

///cy.contains('Top').click()
//two ways of handling inviscible element.. 1 jquery  2  use force ytrue

//you can traverse to siblings and works only on get
cy.contains('Top').click({force:true})


cy.url().should('include','top')

})


})









