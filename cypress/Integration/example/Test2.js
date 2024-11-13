describe('My First Test Suite', function() {
    it('My First Test', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000);
cy.get('.products').find('.product').should('have.length', 4);
cy.get('.products').as('productLocator');
cy.get('@productLocator').find('.product').each(($el, index, $list ) => {
    const vegname =  $el.find('h4.product-name').text()
    if(vegname.includes('Cashews'))
    {
     cy.wrap($el).find('button').click()
     cy.log('cashews is added')
    }
 }
 )

 //cy.get('.tada').click()
 cy.get('img[alt=Cart]').click()
 cy.contains('PROCEED TO CHECKOUT').click()
 cy.get('.promoBtn').click()
 cy.contains('Place Order').click()

})


}




)