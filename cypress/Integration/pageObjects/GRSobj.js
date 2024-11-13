class GRS {
 
navigateToCategory() {
   return cy.get('div li.ant-menu-item:nth-child(2)')
}

navigateToJobPosition() {
    return cy.get('div li.ant-menu-item:nth-child(4)')
}

navigateToAssignInterview() {
   return cy.get('div li.ant-menu-item:nth-child(5)')
}

getUsername(){
    return cy.get('#username')
}

getPassword() {
   return cy.get('#password')
}

getSignInButton(){
   return cy.contains('Sign In')
}

getHomepageText(){
  return cy.get('main div div div')
}

}