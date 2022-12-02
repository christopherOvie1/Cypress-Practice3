// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
  Cypress.Commands.add("selectingProduct", (productName) => { 

 cy.get('h4.card-title').each(($el, index, $list) => {
     if($el.text().includes(productName))
    {
        cy.get('button.btn.btn-info').eq(index).click()  
       //  cy.contains("Blackberry").click();
      // cy.get('button.btn.btn-info').click()

          }

 })
 })

 Cypress.Commands.add("selectProduct", (searchTxt) => {
    //to input search text in Google and perform search
    cy.get("input[type='text']").type(searchTxt);
    cy.contains("Google Search").click();
 });

Cypress.Commands.add('addProductToBasket',productName =>{
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text()===productName){
            cy.log($el.text())
            cy.get('button.btn.btn-info').eq(index).click()
        }    
    });
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })