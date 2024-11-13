
///<reference types="cypress-iframe" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
import 'cypress-iframe'


describe('First Test', function() {

    before(function()
{
    //runs before all blocks
    cy.fixture('example').then(function(data){
this.data=data
    })
})
    it('First Test Case', function(){

    const homePage = new HomePage();
    const productPage = new ProductPage();
    //Cypress.config('defaultCommandTimeout', 5000)


cy.visit(Cypress.env('url')+"angularpractice/")

homePage.getEditbox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value', this.data.name)
homePage.getValidation().should('have.attr', 'minlength', '2')
//cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2') //other way to do prop
cy.get('#inlineRadio3').should('be.disabled')


//cy.pause()
//cy.get('a[href*="/angularpractice/shop"]').click()
homePage.getShopTab().click()
//cy.selectProduct(this.data.productToAdd[0])
//cy.selectProduct(this.data.productToAdd[1])

this.data.productToAdd.forEach(function(el) {
    cy.selectProduct(el)
    
});

productPage.checkoutButton().click()
var sum=0
cy.get('tr td:nth-child(4) strong').each((el, index, list) => {
  const priceText = el.text()
  var priceValue= priceText.split(" ")
   priceValue=priceValue[1].trim()
   sum= Number(priceValue)+Number(sum);
}).then(function(){
    cy.log(sum)
})

cy.get('tr td h3 strong').then(function(element){
    const priceText = element.text()
  var res= priceText.split(" ")
   var Total=res[1].trim()
expect(Number(Total)).to.equal(sum)

})
productPage.finalcheckout().click()
productPage.editCountry().type('india')
cy.wait(5000)
productPage.selectCountry().click()
productPage.agreeTC().click({ force:true})
productPage.purchaseButton().click()
//productPage.confirmOrder().should('have.text', 'Success!')
productPage.confirmOrder().then(function(element) {
    const actualText = element.text()
    expect(actualText.includes('Success')).to.be.true
})



/* cy.get('h4.card-title').each(($el, index, $list) =>
{ 
    if($el.text().includes('Blackberry'))
    {
        cy.get('button.btn.btn-info').eq(index).click()
    }
}) */

    })
}
)