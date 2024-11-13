describe('My First Test Suite', function() {
    it('My First Test', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()

//window:alert()
cy.on('window:alert', (str) => 
{
    //mocha
    expect(str).to.contains('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm', (str) => 
    {
        //mocha
        expect(str).to.contains('Hello , Are you sure you want to confirm?')
        return false
    })

    cy.on('window:confirm', (str) => 
        {
            //mocha
            expect(str).to.contains('Hello , Are you sure you want to confirm?')
            return true
        })


    })
}
)