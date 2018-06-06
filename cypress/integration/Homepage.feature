Feature: homepage

  Something something. Something something.

#  Scenario: Opening my homepage
#    Given I am on the homepage
#    Then I see "Cypress-Cucumber" in the title

  Scenario: Clicking
    Given I am on the homepage
    When I type 'Hello' in the textbox
    And I click HIT ME!
    Then the label says 'Hello'

  Scenario: Reddit
    Given I am on reddit
    When I click all
