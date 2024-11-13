describe('My First Test Suite', function() {
    it('My First Test', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('.mouse-hover-content').invoke('show')

    //cy.get('a[href="#top"]').click()
    //cy.contains('Top').click()
    cy.contains('Top').click({ force:true})
    cy.url()
    })
}
)