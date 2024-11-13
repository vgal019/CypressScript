import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../pageObjects/HomePage'
import ProductPage from '../../../pageObjects/ProductPage'

const homePage = new HomePage();
const productPage = new ProductPage();

Given ('I Open Ecommerce page', () => {
    cy.visit(Cypress.env('url')+"angularpractice/")
})

//When I Add Items to cart
When ('I Add Items to cart', function() 
{
    homePage.getShopTab().click()
    this.data.productToAdd.forEach(function(el) {
        cy.selectProduct(el)
    
    });
productPage.checkoutButton().click()

})

When ('validate the total price', () => {
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
});

Then("test", function () {
    
productPage.finalcheckout().click()
productPage.editCountry().type('india')
cy.wait(5000)
productPage.selectCountry().click()
productPage.agreeTC().click({ force:true})
productPage.purchaseButton().click()
//productPage.confirmOrder().should('have.text', 'Success!')
    });

When ("I fill the form details", function(dataTable){
    homePage.getEditbox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
});

Then ("Validate the form data", function(dataTable){
    homePage.getTwoWayDataBinding().should('have.value', 'bob')
    homePage.getValidation().should('have.attr', 'minlength', '2')
    cy.get('#inlineRadio3').should('be.disabled')
    Cypress.config('defaultCommandTimeout', 3000)
});

Then ("Navigate to shop page", function() {
    homePage.getShopTab().click()
});