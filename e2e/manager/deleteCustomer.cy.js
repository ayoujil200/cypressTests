describe('Delete customer', () => {
    it('Deletes a customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list')
        cy.contains('Harry').parent().find('button').click()
        cy.contains('Harry').should('not.exist')
    })
})