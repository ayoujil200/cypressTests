describe('Search feature', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list');
    });

    it('Should display search input field', () => {
        cy.get('input[ng-model="searchCustomer"]').should('be.visible');
    });

    it('Should return the expected customer', () => {
        const searchText = 'Harry';
        cy.get('input[ng-model="searchCustomer"]').type(searchText);
        cy.get('tbody tr').should('have.length', 1);
        cy.get('tbody td').contains(searchText);
    });
});