/// <reference types="cypress" />

import { HomePage } from "../page-objects/homePage";
import { ResultPage } from "../page-objects/resultPage";
import { SearchPage } from "../page-objects/searchPage";



// beforeEach(() => {

// })
describe('just search', () => {
  const searchPage = new SearchPage()
  const homePage = new HomePage()
  const resultPage = new ResultPage()


  beforeEach(() =>

    searchPage.navigate()


  )

  it('expidia website', function () {
    // search website 'expedia'
    searchPage.getSearchfield("expedia")
    // cy.get('form').submit()
    //click on the link
    cy.get('[href="https://www.expedia.com/"] > .LC20lb').click();

    //click on Flights
    homePage.getFlyButton()

    //cy.get('a').should('have.attr', 'href', '#main_content')

    homePage.getFirstField("London (LHR-Heathrow)")
    //click on the some result
    homePage.getFirstSubResult()

    // type 'ON' to search the city 
    homePage.getSecondFiled("Islip, NY (ISP-MacArthur)")

    homePage.getSecondSubResult()
    //1st date
    homePage.getFirstDateButton()

    //1stday
    homePage.getFirstDateDay()

    homePage.getSecondDateDay()

    homePage.getDone()
    //click search
    homePage.getSearchButton()


    //morning flight
    resultPage.getMorningFlight()


    //mouse over
    resultPage.getpreferredDLAirLineAAmouseOver()
    //check frist AirLine
    resultPage.getpreferredDLAirLineAA()
    //mouse over
    //resultPage.getpreferredDAirLineALmouseOver()
    //check other AirLine


    resultPage.getpreferredDLAirLineIBmouseOver()

    resultPage.getpreferredDLAirLineIB()


    cy.scrollTo('bottom', { timeout: 10000 })



    cy.get('div.uitk-flex-item > .uitk-text', { timeout: 10000 }).should('not.exist');



    resultPage.getLastFlightByPrice('$3,216')

    resultPage.getLastFlightByAirplaneNo('1588')

  



  });
});