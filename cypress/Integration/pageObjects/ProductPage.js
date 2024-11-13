class ProductPage {

    checkoutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
     finalcheckout() {
      
        return cy.get(':nth-child(5) > :nth-child(5) > .btn')
     }

     editCountry(){
        return cy.get('#country')
     }

     selectCountry(){
        return cy.get('.suggestions > ul > li > a')
     }
    agreeTC(){
    return cy.get('#checkbox2')
}
     purchaseButton(){
        return cy.get('.ng-untouched > .btn')
     }

     confirmOrder(){
        return cy.get('strong')
     }
}

export default ProductPage