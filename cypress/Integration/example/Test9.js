///<reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'


describe('My First Test Suite', function() {
    it('My First Test', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.frameLoaded('#courses-iframe')
cy.iframe().find('div.navbar-collapse a[href*="mentorship"]').eq(0).click()
cy.iframe().find('h1[class*="pricing-title"]').should('have.length', '2')




    })
}
)