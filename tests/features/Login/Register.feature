Feature: Register account

  Background:
    Given the user is in the register page

  Scenario: Register with valid data
    When the user registers using "CorrectCredentials" data
    Then the register element should be displayed

  Scenario: Register with invalid data
    When the user registers using "Credswithoutpassword" data
    Then error message should be displayed
