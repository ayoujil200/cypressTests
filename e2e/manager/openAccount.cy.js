describe('My Form', () => {
    it('should allow the user to select a customer and currency and process the form', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount');
        cy.get('select[name="userSelect"]').select('Harry Potter');
        cy.get('select[name="currency"]').select('Dollar');
        cy.get('button[type="submit"]').click();
    });
});



