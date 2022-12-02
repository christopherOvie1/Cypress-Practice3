/// <reference types="cypress" />

describe('alerts', () => {
    it('my first test', () => {


//cy.visit('http://qaclickacademy.com/practice.php')
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#alertbtn').click()
cy.get("[value='Confirm']").click()
//window alert
cy.on('window:alert',(str,)=>{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})


cy.get('#opentab').invoke('removeAttr','target').click()
//cy.url().should('include','qaclickacademy')


cy.url().should('include','rahulshettyacademy')





    })
})