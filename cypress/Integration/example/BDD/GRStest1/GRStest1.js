import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('I login to GRS', function(){
     cy.visit('https://oci-grs-app.growexx.com/login')
     cy.get('p.createAccount').should('have.text', 'GrowExx Recruitment System')
     cy.get('#username').type('vikas@growexx.com')
     cy.get('#password').type('Grow@123')
     cy.contains('Sign In').click()
     cy.get('main div div div').should('have.text',' Welcome to the GrowExx Recruitment System Admin Page ')

})

When ('I navigate to category', function(){
    cy.get('div li.ant-menu-item:nth-child(2)').click()
    cy.get('div .ant-page-header-heading-title').contains('Category')
})

Then ('I Add category details', function(){
    cy.contains('+ Add Category').click()
     cy.get('div[class="ant-modal-header"]').should('be.visible')
     cy.get('input.ant-input:nth-child(1)').type('Cypress Automation')
     cy.wait(5000)
     cy.get('.ant-select-selection-item').click()
     cy.wait(3000)
     //cy.get('div .ant-select-selection-search').click()
     //cy.get('.ant-select-item-option-content').select('Acceptance Testing')
     cy.get('div[title="Acceptance Testing"]').click()
})

Then ('I search the added category', function() {
    const addedcategory = "Acceptance Testing"
    cy.get('input[aria-label="Category Name Filter Input"]').type(addedcategory)
    cy.get('div[col-id="name"] div .ag-cell-value').should('have.text',addedcategory)
})

Then ('I update the existing category', function() {
    const updatedCategoryName = " cy"
    cy.get('button[title="Edit Category"]').click()
    cy.get('#rc_unique_0').should('be.visible')
    cy.get('input[placeholder="Add Category name"]').click().type(updatedCategoryName)
    cy.contains('Update').click()
})

Then ('I validate category is updated successfully', function() {

    const addedcategory = "Acceptance Testing"
    const updatedCategoryName = " cy"
    cy.get('.ant-notification-notice-message', { timeout: 10000 }) // Wait for up to 10 seconds
    .should('be.visible').then((el) =>
    {const message = el.text()
    if(message.includes('successfully updated')) {
        cy.log("Category Added and message is " +message)
    } else
    cy.log("Unexpected error "+message)})

//verify updated category name is displayed
cy.get('div[col-id="name"] div .ag-cell-value').should('have.text',addedcategory+updatedCategoryName)

})

When ('I navigate to Job Position page', function(){
    cy.get('div li.ant-menu-item:nth-child(4)').click()
    cy.get('div span[title="Job Position List"]').should('have.text','Job Position List')
})

Then('I add Job Position', function(){
    const jobTitle = 'Cypress Automation1'
const countofQuestions = 1
const countofOpenings = 1
const validTill = '20'
cy.contains('+ Add Job Position').click()
cy.get('div[class="ant-modal-header"] div').should('be.visible')
cy.get('div[name="title"] div').type(jobTitle).type('{enter}')
cy.get('input[name="noOfQuestions"]').type(countofQuestions)
cy.get('input[name="noOfOpenings"]').type(countofOpenings)
cy.get('input[name="validTill"]').click()
cy.get('div.ant-picker-cell-inner').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() == validTill) {
      // wrap this element so we can ,use cypress commands on it
      cy.wrap($el).click() }
     })
cy.get('input[title="2024-11-20"]').should('be.visible')
cy.get('textarea[name="description"]').type('looking for Cypress Automation QA with more than 2+ years of experience')
cy.get('[data-testid="CATEGORY_SELECT"] > .ant-select-selector > .ant-select-selection-item').click()
//cy.get('div span input[aria-controls="rc_select_3_list"]').click()
cy.get('div[title="Manual"]').click()
cy.get('[data-testid="LEVEL_SELECT"] > .ant-select-selector > .ant-select-selection-item').click()
cy.get('div[title="Early Career (1-3 Years)"]').click()
cy.get('input[name="numberOfQuestions"]').type('1')
cy.get('button svg[data-icon="plus"]').click()
cy.get('button[data-testid="DEFINEINTERVIEW_MODAL_OK"]').click( {force: true})
})

Then ('I validate Job Position is updated successfully', function (){

cy.get('button[data-testid="SAVE_BTN"]').should('be.visible').click()
cy.get('button[data-testid="SAVE_CONFIRM_BTN"]').click()

})
