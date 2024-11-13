describe('Add Job Position for Interview', function() {
    it('First Test Case', function(){
//login
        cy.visit('https://oci-grs-app.growexx.com/login')
        cy.get('p.createAccount').should('have.text', 'GrowExx Recruitment System')
        cy.get('#username').type('vikas@growexx.com')
        cy.get('#password').type('Grow@123')
        cy.contains('Sign In').click()
        cy.get('main div div div').should('have.text',' Welcome to the GrowExx Recruitment System Admin Page ')

//navigate to job position
       // const categoryName = "Cypress Automation TestGRS"
     cy.get('div li.ant-menu-item:nth-child(4)').click()
     cy.get('div span[title="Job Position List"]').should('have.text','Job Position List')

// add job position
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
cy.get('button[data-testid="SAVE_BTN"]').should('be.visible').click()

cy.get('button[data-testid="SAVE_CONFIRM_BTN"]').click()


    })
}
)