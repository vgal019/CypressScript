//const { list } = require("@badeball/cypress-cucumber-preprocessor/pretty-reporter")

describe('Add Category for Interview', function() {
    it('First Test Case', function(){

     //successfull login   
     cy.visit('https://oci-grs-app.growexx.com/login')
     cy.get('p.createAccount').should('have.text', 'GrowExx Recruitment System')
     cy.get('#username').type('vikas@growexx.com')
     cy.get('#password').type('Grow@123')
     cy.contains('Sign In').click()
     cy.get('main div div div').should('have.text',' Welcome to the GrowExx Recruitment System Admin Page ')

     //Add category
     const categoryName = "Cypress Automation TestGRS"
     cy.get('div li.ant-menu-item:nth-child(2)').click()
     cy.get('div .ant-page-header-heading-title').contains('Category')
     cy.contains('+ Add Category').click()
     cy.get('div[class="ant-modal-header"]').should('be.visible')
     cy.get('input.ant-input:nth-child(1)').type(categoryName)
     //cy.wait(2000)
     cy.get('.ant-select-selection-item').click()
     cy.wait(2000)
     cy.get('div[title="Acceptance Testing"]').click()
     cy.get('button[data-testid="CATEGORY_MODAL_OK"]').click()

 
  
cy.get('.ant-notification-notice-message', { timeout: 10000 }) // Wait for up to 10 seconds
  .should('be.visible').then((el) =>
  {
    const message = el.text()
    if(message.includes('successfully created')) {
        cy.log("Category Added and message is " +message)
    }
    else
    cy.log("Unexpected error "+message)

    })

    })
}
)



