@test
Feature: Login and access Shopping Cart and do the shopping

  Background:
    Given the user is in the home page

  Scenario Outline: Login and place an order successfully
    When the user logs in the website with email "<email>" and password "<password>"
    When the Shopping  page should be displayed
    When Add an iphone item to the cart
    When clicked proceed to checkout button the details should be opened
    When fill the details in the details page using "login" data click submit
    Then the Congrats message should be visible
    Examples:
      | email             | password |
      | admin@admin.com  | admin123 |