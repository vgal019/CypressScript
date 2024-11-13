describe('Handling Child Windows', function() {
    it('Should handle child window', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#opentab').invoke('removeAttr', 'target').click()
//cy.get('#opentab').click()

cy.origin('https://www.qaclickacademy.com/', () => {
    cy.get('.nav-item a[href="about.html"]').click()
    cy.get('.section-title h2').should('contain','QAClick')
})


    })
}
)