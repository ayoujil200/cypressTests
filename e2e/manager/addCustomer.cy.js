describe('Add customer form', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
    });

    it('Adds a new customer', () => {
        cy.get('input[ng-model="fName"]').type('John');
        cy.get('input[ng-model="lName"]').type('Doe');
        cy.get('input[ng-model="postCd"]').type('12345');
        cy.get('form[name="myForm"]').submit();
    });
});