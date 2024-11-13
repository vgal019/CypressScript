
///<reference types="cypress-iframe" />
import 'cypress-iframe'


describe('Calander Test', function() {
    it('validating date', function(){

const day = "15";
const month= "6";
const year = "2027";
const date = [month, day, year];

 cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
 cy.get('div.react-date-picker__inputGroup').click()
 cy.get('.react-calendar__navigation__label__labelText').click()
 cy.get('.react-calendar__navigation__label__labelText').click()
 cy.contains('button',year).click()
 cy.get('button.react-calendar__tile').eq(Number(month)-1).click()
// cy.get('button.react-calendar__tile').
 cy.contains('abbr',day).click()

 //assertion

 cy.get('input.react-date-picker__inputGroup__input').each(($el, index, $list) =>
 {
   cy.wrap($el).invoke('val').should('eq', date[index])

 })

 



    })
}
)