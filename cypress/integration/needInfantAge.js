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

        homePage.getFirstField("TO")
        //click on the some result
        homePage.getFirstSubResult()

        // type 'ON' to search the city 
        homePage.getSecondFiled("ON")

        homePage.getSecondSubResult()
        //1st date
        homePage.getFirstDateButton()

        //1stday
        homePage.getFirstDateDay()
        homePage.getDone()
        homePage.getReturnDateButton()

        homePage.getSecondDateDay()

        homePage.getDone()
        //click search
        homePage.getSearchButton()



        //traveler options click
        homePage.getTravelerOptButton()
        //Infant element to increase number "+""
        homePage.getPlusIconButtonClick()


        // click Done to close traveler options
        homePage.getDoneOptButton()




        //mouse over first AirLine
        resultPage.getpreferredDLAirLineAAmouseOver()
        //check first AirLine
        resultPage.getpreferredDLAirLineAA()

        //mouse over second AirLine
        resultPage.getpreferredDLAirLineDLmouseOver()
        //check second AirLine
        resultPage.getpreferredDLAirLineDL()

        //mouse over  3rd Airline
        resultPage.getpreferredDLAirLineUAmouseOver()
        //check 3rd AirLine
        resultPage.getpreferredDLAirLineUA()
        //scroll
        cy.scrollTo('bottom', { timeout: 10000 })

        // get morning flights
        resultPage.getMorningFlight()
        //Error message present during further actions
        homePage.getErrorMessageCheck("Please provide the age of each infant.")

       




    });
});