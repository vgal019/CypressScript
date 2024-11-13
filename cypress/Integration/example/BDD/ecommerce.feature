Feature: End to End Ecommerce validation

    Application regression
    @Regression
    Scenario: Ecommerce product delivery
    Given I Open Ecommerce page
    When I Add Items to cart 
    When validate the total price
    Then test

    @Smoke
    Scenario: filling the form
    Given I Open Ecommerce page
    When I fill the form details
    | name | gender |
    | bob  | Male   |
    Then Validate the form data
    Then Navigate to shop page