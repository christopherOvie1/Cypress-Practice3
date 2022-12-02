/// <reference types="cypress" />



describe('alertshhhh', () => {
    it('my first test', () => {


//cy.visit('http://qaclickacademy.com/practice.php')
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

   const text= $el.text()
   if(text.includes('Python')){
      
cy.get('tr td:nth-child(2)').eq(index) .next().then(function(price){
  const priceText=  price.text()
  expect(priceText).to.eql('25')
})
   }
    
})
//td:nth-child(2)

})


})









