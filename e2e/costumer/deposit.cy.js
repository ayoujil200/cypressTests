describe('Deposit Functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
        cy.get('#userSelect').select('Harry Potter')
        cy.get('button[type="submit"]').click()
        cy.url().should('eq', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
        cy.contains('Welcome Harry Potter !!')
    });

    it('Should deposit the amount successfully', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
        cy.get('#accountSelect').select('1004');
        cy.contains('Deposit').click();
        cy.get('input[placeholder="amount"]').type('100');
        cy.get('button[type="submit"]').click();
        cy.contains('Deposit Successful').should('be.visible');
    });
});