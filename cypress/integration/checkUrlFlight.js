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
        

      

        cy.intercept('/Flights-Search?*' , ).as(
            'getSearch'
          )
          //click search
          homePage.getSearchButton()
         //should have url with Flights
         cy.wait('@getSearch').its('request.url').should('include', '/Flights')

    });
});