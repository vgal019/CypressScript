describe('My First Test Suite', function() {
      it('My First Test', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000);
cy.get('.product:visible').should('have.length',4);
cy.get('.products').find('.product').should('have.length', 4);
cy.get('.products').as('productLocator');
console.log("print with js");
cy.log("print with cypress");

cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
      console.log('js within cy');
})
cy.get(':nth-child(3) > .product-action > button').click();

cy.get('.products').find('.product').each(($el, index, $list ) => {
   const vegname =  $el.find('h4.product-name').text()
   if(vegname.includes('Cashews'))
   {
    cy.wrap($el).find('button').click()
   }
}
)

//asser logo text
cy.get('.brand').should('have.text', 'GREENKART')
/*cy.get('.brand').should('have.text', 'GREENKART').then(function()
{
     console.log('true with js')
     cy.log('true with cy')
}) */
      })


}




)