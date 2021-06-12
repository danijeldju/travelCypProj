/// <reference types="cypress" />

import { HomePage } from "../page-objects/homePage";
import { ResultPage } from "../page-objects/resultPage";
import { SearchPage } from "../page-objects/searchPage";



// beforeEach(() => {
  
// })
describe ('just search',()=>{
const searchPage = new SearchPage()
const homePage = new HomePage()
const resultPage = new ResultPage()


beforeEach(()=>
  
    searchPage.navigate()
    

)

  it('expidia website', function () {
    cy.pause()
     // search website 'expedia'
    searchPage.getSearchfield("expedia")
    // cy.get('form').submit()
    //click on the link
    cy.get('[href="https://www.expedia.com/"] > .LC20lb').click(); 
    
    //click on Flights
    homePage.getFlyButton()
    
    //cy.get('a').should('have.attr', 'href', '#main_content')

    //homePage.getFirstField("TO")
    homePage.getFirstField("Washington (DCA - Ronald Reagan Washington National)")
    //click on the some result
    homePage.getFirstSubResult()

    // type 'ON' to search the city 
    homePage.getSecondFiled("Ontario (ONT - Los Angeles-Ontario Intl.)")

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
    resultPage.getpreferredDLAirLineASmouseOver()

    //check frist AirLine
    resultPage.getpreferredDLAirLineAS()
    //mouse over
    resultPage.getpreferredDLAirLineUAmouseOver()
    //check second AirLine
    resultPage.getpreferredDLAirLineUA()

    //select short duration
    //cy.get('#listings-sort').select('DURATION_INCREASING')

    //cy.get('[data-opt-id="DURATION_INCREASING"]',{ timeout: 10000}).select('DURATION_INCREASING')
    //cy.get('[data-layer="Content"]',{ timeout: 10000 }).first().should("include.text",'8350')


    cy.scrollTo('bottom',{ timeout: 10000 })

    resultPage.getFirstFlightByPrice('$784')

    resultPage.getFlightByAirplanesNo('6202', '6353')

    
    //let stringO = resultPage.getFlightByAirplanesNo();
    
    //let str = resultPage.getFlightByAirplanesNo()
     
     


    //assert.typeOf(resultPage.getFlightByAirplanesNo.toString(), 'string', 'val is string')
    //var array = stringO
    ///expect().to.have.any.keys('4568', '5930')
    //expect(resultPage.getFlightByAirplanesNo()).to.have.any.keys('4568')
    
  });
});