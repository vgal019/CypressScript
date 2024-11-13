describe('My First Test Suite', function() {
    it('My First Test', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('.left-align #product tr td:nth-child(2)').each(($el, index, $list) =>
{
 
const course = $el.text()
if(course.includes("Python")){
    cy.get('.left-align #product tr td:nth-child(2)').eq(index).next().then(function(price)
    {
      const priceText = price.text()
      expect(priceText).to.equal('25')
    })

}

})

    })
}
)