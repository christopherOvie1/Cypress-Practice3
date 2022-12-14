/// <reference types="cypress" />

describe('Implicit Assertions', () => {
    it('my first test', () => {


cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//select multiple checkboxes

cy.get("input[type='checkbox']").check().should('be.checked')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

cy.get("input[type='checkbox']").check(['option2','option3'])

//static droodown
cy.get('select').select('option2').should('have.value','option2')


//atocomplete
cy.get('#autocomplete').type('India')

cy.get('.ui-menu-item>div').each(($el, index, $list) => {
if($el ==="India"){
    
    $el.click()
}
})
//cy.wait(2000)
cy.get('#autocomplete').should('have.value','India')

//handle visibility
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


cy.get("[value='radio1']").check().should('be.visible')
    })
})