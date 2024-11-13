class HomePage{

    getEditbox() {
       return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender() {
        return cy.get('select')
    }

    getTwoWayDataBinding(){
       return cy.get('h4 .ng-pristine')
    }

    getValidation(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getShopTab(){
        return cy.get('a[href*="/angularpractice/shop"]')
    }
}

export default HomePage;