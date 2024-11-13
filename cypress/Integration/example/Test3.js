describe('My First Test Suite', function() {
    it('My First Test', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//cy.get('#checkBoxOption1').click()
//cy.get('#checkBoxOption1').should('be.checked')

cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//cy.get('#checkBoxOption1').check().should('not.be.checked')

//multiple checkbix
cy.get('input[type="checkbox"]').check(['option1', 'option2'])
cy.get('input[type="checkbox"]').check()  //check all

//uncheck
cy.get('input[type="checkbox"]').uncheck(['option1'])
cy.get('input[type="checkbox"]').uncheck()

//static dropdown
cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

//dynamic dropdown

cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el, index, $list ) => {
   if($el.text() === 'India')
    {
        $el.click()
       //cy.get('#autocomplete').should('have.value','India')
    }
    })
    cy.get('#autocomplete').should('have.value','India')

    //visible invisible element handling
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //radio button
    cy.get('input[value="radio1"]').check().should('be.checked')
    cy.get('.radioButton').check()
    cy.get('input[value="radio1"]').check().should('be.checked')
})


}
)