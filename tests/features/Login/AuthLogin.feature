@test
Feature: Login and access Shopping Cart

  Background:
    Given the user is on the home page

  Scenario Outline: Successful navigation to the Shopping Cart page
    When the user logs in with email "<email>" and password "<password>"
    Then the Shopping Cart page should be displayed

    Examples:
      | email              | password  |
      | admin@admin.com  | admin123  |


