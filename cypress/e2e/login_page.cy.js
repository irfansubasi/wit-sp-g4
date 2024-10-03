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

  it('email validation works successfully', () => {
    cy.get('[data-cy="email"]').type('john.doeexample.com');
    cy.get('[data-cy="emailValidation"]').should(
      'contain',
      'Please enter a valid email address.'
    );
    cy.get('[data-cy="button"]').should('be.disabled');
  });

  it('email & password validation works successfully', () => {
    cy.get('[data-cy="email"]').type('john.doeexample.com');
    cy.get('[data-cy="password"]').type('123');

    cy.get('[data-error-cy="error-messages"]').should('have.length', 2);
    cy.get('[data-cy="passwordValidation"]').should(
      'contain',
      'The password must be at least 8 characters, contain numbers, upper and lower case letters and special characters.'
    );
  });

  it('checkbox works successfully', () => {
    cy.get('[data-cy="email"]').type('john.doe@example.com');
    cy.get('[data-cy="password"]').type('123456fgGD!');

    cy.get('[data-cy="button"]').should('be.disabled');
  });
});
