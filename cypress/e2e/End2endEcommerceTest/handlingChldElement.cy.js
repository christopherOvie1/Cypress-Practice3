/// <reference types="cypress" />



describe('alertshhhh', () => {
    it('my first test', () => {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//to get attribute of href use jquery  prop
//cannot use jquery abnd cypress command must resolve the promise  use then
cy.get('#opentab').then(function(ele){
const url =ele.prop('href')
cy.visit(url)
})



})


})









