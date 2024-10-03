describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Successfully submits the form and navigates to the success page', () => {
    cy.get('[data-cy="email"]').type('john.doe@example.com');
    cy.get('[data-cy="password"]').type('123456fgGD!');
    cy.get('[data-cy="checkbox"]').check();

    cy.get('[data-cy="button"]').click();

    cy.url().should('include', '/success');

    cy.contains('BAŞARILI!').should('be.visible');
  });
});
