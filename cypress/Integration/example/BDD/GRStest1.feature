Feature: Test BDD

    Learn BDD Framework

    @test
    Scenario: Add category Test
    Given I login to GRS
    When I navigate to category
    Then I Add category details

    @test
    Scenario: Search category Test
    Given I login to GRS
    When I navigate to category
    Then I search the added category
    Then I update the existing category
    Then I validate category is updated successfully

    @test
    Scenario: Add Job Position for Interview
    Given I login to GRS
    When I navigate to Job Position page
    Then I add Job Position
    Then I validate Job Position is updated successfully
    
