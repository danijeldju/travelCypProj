

export class ResultPage {

    getFirstResult() {
        cy.get(':nth-child(5) > .uitk-spacing-margin-blockstart-two > :nth-child(1) > .uitk-switch > .uitk-switch-content > .uitk-checkbox-switch-label > .uitk-text', { timeout: 10000 }).click()
    }

    getFifthResult() {
        cy.get(':nth-child(5) > .uitk-switch > .uitk-switch-content > .uitk-checkbox-switch-label > .uitk-text').click()
    }

    getMorningFlight() {
        cy.get(':nth-child(6) > .uitk-layout-grid > :nth-child(1) > .uitk-button-toggle-content', { timeout: 20000 }).click()


    }


    getpreferredDLAirLineASmouseOver() {
        cy.get('#preferred-airline-AS', { timeout: 10000 }).trigger('mouseover')
    }

    getpreferredDLAirLineAAmouseOver() {
        cy.get('#preferred-airline-AA', { timeout: 10000 }).trigger('mouseover')
    }
    //preferred AiRline 1
    getpreferredDLAirLineUAmouseOver() {
        cy.get('#preferred-airline-UA', { timeout: 10000 }).trigger('mouseover')
    }

    getpreferredDAirLineALmouseOver() {
        cy.get('#preferred-airline-AL', { timeout: 10000 }).trigger('mouseover')
    }

    getpreferredDLAirLineAFmouseOver() {

        cy.get('#preferred-airline-AF', { timeout: 10000 }).trigger('mouseover')
    }

    getpreferredDLAirLineAYmouseOver() {

        cy.get('#preferred-airline-AY', { timeout: 10000 }).trigger('mouseover')
    }

    getpreferredDLAirLineIBmouseOver() {
        cy.get('#preferred-airline-IB', { timeout: 10000 }).trigger('mouseover')
    }
    getpreferredDLAirLineDLmouseOver() {
        cy.get('#preferred-airline-DL', { timeout: 10000 }).trigger('mouseover')
    }
    
    

    getpreferredDLAirLineAA() {
        cy.get('#preferred-airline-AA', { timeout: 10000 }).focus()
        cy.focused().click()
    }


    //preferred AiRline 2
    getpreferredDLAirLineAS() {
        cy.get('#preferred-airline-AS', { timeout: 10000 }).check()
    }

    getpreferredDLAirLineAL() {
        cy.get('#preferred-airline-AL', { timeout: 10000 }).check()
    }


    getpreferredDLAirLineAY() {

        cy.get('#preferred-airline-AY', { timeout: 10000 }).check()
    }


    getpreferredDLAirLineIB() {
        cy.get('#preferred-airline-IB', { timeout: 10000 }).check()
    }
    getpreferredDLAirLineAF() {
        cy.get('#preferred-airline-AF', { timeout: 10000 }).check()
    }
    

    //preferred AiRline 3
    getpreferredDLAirLineDL() {
        cy.get('#preferred-airline-DL', { timeout: 10000 }).check()
    }
    //preferred AiRline 4
    getpreferredDLAirLineWS() {
        cy.get('#preferred-airline-WS', { timeout: 10000 }).check()
    }
    //preferred AiRline 5
    getpreferredDLAirLineUA() {
        cy.get('#preferred-airline-UA', { timeout: 10000 }).check()
    }



    
  


    getFlightOperated() {
        cy.get('[data-test-id="flight-operated"]', { timeout: 10000 })

    }

    getFlightOperatedFirstArrayElem(textPrice) {
        cy.get('[data-test-id="offer-listing"]', { timeout: 10000 }).first().should("include.text", textPrice)

    }

    getFlightOperatedFirst() {
        cy.get('[data-test-id="offer-listing"]', { timeout: 10000 }).first().click({ force: true })

    }

    getFlightOperatedLast() {
        cy.get('[data-test-id="flight-operated"]', { timeout: 10000 }).last().click()

    }

    checkFirtPrice(firtPrice) {
        cy.get('.uitk-flex-item > .uitk-price-lockup > section > .uitk-lockup-price').contains(firtPrice)
    }
    //first result
    getFlightByAirplaneNo(airplaneNo1) {
        // cy.get('[data-test-id="search-results"]')
        //cy.get('[data-test-id="listings"]')

        cy.get('[data-test-id="select-link"]').eq(0).should("include.text", airplaneNo1)

    }




    getFirstFlightByPrice(price) {
      
        cy.get('[data-test-id="select-link"]', { timeout: 10000 }).its('length').then(numLinks => {
            let num = numLinks
            cy.get('[data-test-id="select-link"]').eq(0).should("include.text", price).wait(5000)

        })
    }




    getClickOnFirstNewCardFlightByPrice() {
        cy.get('.uitk-card > .uitk-button').click()
       
    }
    


    getLastFlightByPrice(price) {
        cy.get('[data-test-id="select-link"]', { timeout: 10000 }).should('be.visible').its('length').then(numLinks => {
            let num = numLinks
            cy.get('[data-test-id="select-link"]').eq(num - 1).should("include.text", price)

        })
    }



    getBetweenFlightByPrice(price) {
        cy.scrollTo('bottom', { timeout: 10000 })
        cy.get('[data-test-id="select-link"]', { timeout: 10000 }).its('length').then(numLinks => {
            let num = Math.floor(numLinks / 2)
            cy.get('[data-test-id="select-link"]').eq(num-1).should("include.text", price)

        })
    }


    //last result 
    getLastFlightByAirplaneNo(airplaneNo3) {
        cy.get('[data-test-id="flight-operated"]', { timeout: 10000 }).last().should("include.text", airplaneNo3)

    }

    //between result manually
    getBetweenFlightByAirplaneNo(airplaneNo5) {
        cy.get('[data-test-id="flight-operated"]', { timeout: 10000 }).eq(5).should("include.text", airplaneNo3)

    }

    //between result with math calculation
    getBetweenFlight() {
        cy.get('.uitk-card-link', { timeout: 10000 }).its('length').then(numLinks => {
            let num = Math.floor(numLinks / 2)
            cy.get('.uitk-card-link')
                .eq(num-1)
                .click()


        })
    }


    getBetweenFlightPrice(price) {
        cy.get('.uitk-flex-item > .uitk-price-lockup > section > .uitk-lockup-price').should("include.text", price)
    }




    //first result with airplanes
    getFlightByAirplanesNo(airplaneNo3, airplaneNo4) {
        cy.get('[data-test-id="flight-operated"]', { timeout: 10000 }).first()
            .should("include.text", airplaneNo3)
            .and("include.text", airplaneNo4)



    }
    //last result with airplanes
    getLastFlightByAirplanesNo(airplaneNo1, airplaneNo2) {
        cy.get('[data-test-id="flight-operated"]', { timeout: 10000 }).last()
            .should("include.text", airplaneNo1)
            .and("include.text", airplaneNo2)



    }

    getFirtFlight() {
        cy.get('button[data-test-id="select-link" ]').should('have.class', 'uitk-card-link').first().click({ force: true })
    }


    //click on new card
    getClickOnNewCard() {
    cy.get('.uitk-card > .uitk-button').click()
    }
}

