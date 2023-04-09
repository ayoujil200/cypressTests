describe('Withdraw feature', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
        cy.get('#userSelect').select('Harry Potter')
        cy.get('button[type="submit"]').click()
        cy.url().should('eq', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
        cy.contains('Welcome Harry Potter !!')

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
        cy.get('#accountSelect').select('1004');
        cy.contains('Deposit').click();
        cy.get('input[placeholder="amount"]').type('1000');
        cy.get('button[type="submit"]').click();
        cy.contains('Deposit Successful').should('be.visible');
    });
    it('Withdraws an amount successfully', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
        cy.get('#accountSelect').select('1004');
        cy.contains('Withdrawl').click()
        cy.contains('label', 'Amount to be Withdrawn :').next('input').type('100');
        cy.get('button[type="submit"]').click()
        cy.contains('Transaction successful')
        cy.contains('Balance : 900')
    })
})