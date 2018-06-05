/* global then, when, given */
const url = 'http://localhost:4200';

given('I am on the homepage', () => {
  cy.visit(url);
});

then('I see {string} in the title', (title) => {
  cy.get('h1.title').should('include', title);
});
