Feature: Test BDD

    Learn BDD Framework

    Scenario: Search category Test
    Given I login to GRS
    When I navigate to category
    Then I search the added category
    Then I update the existing category
    Then I validate category is updated successfully