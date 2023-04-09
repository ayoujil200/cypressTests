describe('Login feature', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
    })

    it('Logs in successfully with valid credentials', () => {
        cy.get('#userSelect').select('Harry Potter')
        cy.get('button[type="submit"]').click()

        cy.url().should('eq', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
        cy.contains('Welcome Harry Potter !!')
    })
})