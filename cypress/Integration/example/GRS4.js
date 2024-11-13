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
     cy.get('div li.ant-menu-item:nth-child(5)').click()
    

//assign interview
const candidateName = 'Vaishali Gal'
const candidateEmail = 'vaishali.gal@growexx.com'
cy.get('button[data-testid="ADD_ASSIGN_INTERVIEW"]').click()
cy.get('div[class="ant-modal-title"]').should('be.visible')

cy.get('input[name="name"]').type(candidateName)
cy.get('input[name="emailId"]').type(candidateEmail)
cy.get('input[name="date"]').click()

cy.get('div .ant-picker-cell-inner').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() == 20) {
      // wrap this element so we can ,use cypress commands on it
      cy.wrap($el).click() }
     })

cy.get('li button[type="button"]').click()   
cy.get('.ant-select-selection-item').click()
//cy.get('div[title="Cypress Automation"]').click()

cy.get('.ant-select-item-option-content').each((el, index, list) => {
  if(el.text() == 'Cypress Automation') {
    cy.wrap(el).click({force: true})
  }
})
cy.get('[data-testid="ASSIGN_INTERVIEW_MODAL_OK"]').click()
    })
}
)