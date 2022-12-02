/// <reference types="cypress" />

describe('alertshhhh', () => {

    beforeEach(() => {
        cy.fixture('example').then(function(data)
         {
            //this.data = data
            globalThis.data = data;
     })

    })

    it('my first test', () => {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')


       cy.get("input[name='name']:nth-child(2)").type(globalThis.data.name)
        cy.get('select').select(globalThis.data.gender)
        //jquery has ability to get text present with vaue attribute
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',globalThis.data.name)

        // cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        //     const text= $el.text()
        //     if(text.includes('Python')){
               
        //  cy.get('tr td:nth-child(2)').eq(index) .next().then(function(price){
        //    const priceText=  price.text()
        //    expect(priceText).to.eql('25')
        //  })
        //     }
             
        //  })
        //validate the attribute minlenght is 2
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength',2)

        cy.get(':nth-child(2) > .nav-link').click()

        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if( $el.text().includes("Samsung Note 8"))
        //    {
        //        cy.get('button.btn.btn-info').eq(index).click()     }
      
        //  })
        //if logic be used again and agan make it custom commands or multiple test cases

       // globalThis.data.productNames


      
        
        globalThis.data.productName.forEach(function (element) {
           // copy.push(item * item);
            cy.selectingProduct(element)
            
        });
         
        //           cy.selectingProduct("iphone X")
        //           cy.selectingProduct("Nokia Edge")


                  
        



    })


})









