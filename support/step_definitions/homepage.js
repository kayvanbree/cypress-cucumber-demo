(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/* global then, when, given */
var url = 'http://localhost:4200';

given('I am on the homepage', function () {
  cy.visit(url);
});

then('I see {string} in the title', function (title) {
  cy.get('.title').should('include', title);
});

when('I type {string} in the textbox', function (input) {
  cy.get('.input').type(input);
});

when('I click HIT ME!', function () {
  cy.get('.hit-me').click();
});

then('the label says {string}', function (output) {
  cy.get('.output').should('contain', output);
});

},{}]},{},[1]);
