///<reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'


describe('My First Test Suite', function() {
    it('My First Test', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get("#opentab").then(function(el){

const url = el.prop("href")
cy.visit(url)

cy.origin('https://www.qaclickacademy.com', () => {
    cy.get('div.sub-menu-bar a[href*="about"]').click()
  })

//cy.get('div.sub-menu-bar a[href*="about"]').click()

})




    })
}
)
