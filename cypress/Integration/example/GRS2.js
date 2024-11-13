//import createRollupPlugin from "@badeball/cypress-cucumber-preprocessor/rollup"

describe('Add Category for Interview', function() {
    it('First Test Case', function(){
//login
        cy.visit('https://oci-grs-app.growexx.com/login')
        cy.get('p.createAccount').should('have.text', 'GrowExx Recruitment System')
        cy.get('#username').type('vikas@growexx.com')
        cy.get('#password').type('Grow@123')
        cy.contains('Sign In').click()
        cy.get('main div div div').should('have.text',' Welcome to the GrowExx Recruitment System Admin Page ')

//navigate to category
       // const categoryName = "Cypress Automation TestGRS"
     cy.get('div li.ant-menu-item:nth-child(2)').click()
     cy.get('div .ant-page-header-heading-title').contains('Category')

//search the added category
const addedcategory = "Acceptance Testing"
cy.get('input[aria-label="Category Name Filter Input"]').type(addedcategory)
cy.get('div[col-id="name"] div .ag-cell-value').should('have.text',addedcategory)

//edit the category
const updatedCategoryName = " cy"
cy.get('button[title="Edit Category"]').click()
cy.get('#rc_unique_0').should('be.visible')
cy.get('input[placeholder="Add Category name"]').click().type(updatedCategoryName)
cy.contains('Update').click()

//validate category updated successfully
cy.get('.ant-notification-notice-message', { timeout: 10000 }) // Wait for up to 10 seconds
  .should('be.visible').then((el) =>
  {
    const message = el.text()
    if(message.includes('successfully updated')) {
        cy.log("Category Added and message is " +message)
    }
    else
    cy.log("Unexpected error "+message)

    })

//verify updated category name is displayed
cy.get('div[col-id="name"] div .ag-cell-value').should('have.text',addedcategory+updatedCategoryName)

    })
}
)