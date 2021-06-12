export class SearchPage{

    navigate() {
        cy.visit('https://www.google.com/')
    }

    getSearchfield(searchText){
        cy.get('.gLFyf').type(searchText + "{enter}").wait(1000)
    }
}