describe("Cypress Test", () =>{

    it('Shop home search', () => {
        //AAA Pattern
        cy.visit('/home'); // Arrange
        cy.get('[name="input"]').type('Iron Maiden CD {enter}');
        cy.wait(1000);
        cy.contain('Iron Maiden').click();
        cy.url().should('include', '/product-details'); // Assert
    });
});