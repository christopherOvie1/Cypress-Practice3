/// <reference types="cypress" />

/// <reference types="cypress-iframe" />

import "cypress-iframe"



describe('alertshhhh', () => {
    it('my first test', () => {


cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


cy.frameLoaded('#courses-iframe')
//eq is to retreive element based on index
cy.iframe().find("a[href*='mentorship']").eq(0).click()
//cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)



})


})









