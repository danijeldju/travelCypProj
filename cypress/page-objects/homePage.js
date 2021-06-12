export class HomePage {


    //get and click on 'flyts' button


    getFlyButton() {
        cy.get('.uitk-button-tabs > :nth-child(2) > .uitk-tab-anchor', { timeout: 10000 }).should('be.visible').click()
    }

    //city1
    getFirstField(typeCity1) {
        cy.get('#location-field-leg1-origin-menu > .has-floatedLabel-label > .uitk-faux-input', { timeout: 10000 }).should('be.visible').type(typeCity1);
    }
    // city 2
    getSecondFiled(typeCity2) {
        cy.get('#location-field-leg1-destination-menu > .has-floatedLabel-label > .uitk-faux-input', { timeout: 10000 }).should('be.visible').type(typeCity2);
    }


    //starting date

    getFirstDateButton() {
        //cy.get('#start-date-ROUND_TRIP-0-btn').click()
        cy.get('#d1-btn').click()
    }

    // return date
    getReturnDateButton() {
        cy.get('#d2-btn').click()
    }
    //1st day 24th
    getFirstDateDay() {
        cy.get(':nth-child(1) > .uitk-date-picker-weeks > tbody > :nth-child(4) > :nth-child(5) > .uitk-date-picker-day', { timeout: 20000 }).should('be.visible').click()
    }

    //2nd day 25th
    getSecondDateDay() {

        cy.get(':nth-child(1) > .uitk-date-picker-weeks > tbody > :nth-child(4) > :nth-child(6) > .uitk-date-picker-day', { timeout: 10000 }).click()
    }
    //done pick
    getDone() {
        cy.get('.uitk-date-picker-menu-footer > .uitk-button').click()
    }
    //airline
    getFirstSubResult() {
        cy.get('[data-index="0"] > .uitk-button', { timeout: 10000 }).should('be.visible').click()
    }

    //airline
    getSecondSubResult() {

        cy.get('#location-field-leg1-destination-menu > .uitk-menu-container > .uitk-typeahead-results > [data-index="0"] > .uitk-button', { timeout: 20000 }).should('be.visible').click()
        // cy.get('[data-index="1"] > .uitk-button > .uitk-typeahead-button-label > .is-subText').click()
    }



    getSearchButton() {
        cy.get('[data-testid=submit-button]', { timeout: 10000 }).should('be.visible').click()
    }
    getSearchButtonPaused() {
        cy.get('[data-testid=submit-button]', { timeout: 10000 }).should('be.visible').click()
        cy.get('div.uitk-flex-item > .uitk-text', { timeout: 10000 }).should(item =>{
            if(item.length <1){
                throw new Error ("element is not present")
            } else{
            console.log("element is present");
        }

        })
            
        

    }

    //traveler options click
    getTravelerOptButton() {
        cy.get(':nth-child(2) > .uitk-menu-trigger > .uitk-button', { timeout: 10000 }).click()
    }
    //Infant element to increase number "+""
    getPlusIconButtonClick() {
        cy.get('[data-test-id="infant-count"] > .uitk-flex-align-items-center > .uitk-flex > :nth-child(3)', { timeout: 10000 }).click()
    }
    //select dropdown element for age and select 1
    getDropdownAgeInfant() {
        cy.get('#select-INFANT_IN_LAP-age-select-0', { timeout: 10000 }).select('1')
    }
    // click Done to close traveler options
    getDoneOptButton() {
        cy.get('[data-test-id="traveler-options-done-button"]').click()
    }
    getErrorMessageCheck(textMessage) {
    cy.get('.uitk-error-summary-heading').should("include.text", textMessage)
    }
    getErrorMsg(textMessage) {
        cy.get('.uitk-error-summary-heading').should("not.exist")
        }
}