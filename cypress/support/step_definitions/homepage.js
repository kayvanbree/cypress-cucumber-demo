/* global then, when, given */
const url = 'http://localhost:4200';

given('I am on the homepage', () => {
  cy.visit(url);
});

then('I see {string} in the title', (title) => {
  cy.get('.title')
    .should('include', title);
});

when('I type {string} in the textbox', (input) => {
  cy.get('.input')
    .type(input);
});

when('I click HIT ME!', () => {
  cy.get('.hit-me')
    .click();
});

then('the label says {string}', (output) => {
  cy.get('.output')
    .should('contain', output);
});
