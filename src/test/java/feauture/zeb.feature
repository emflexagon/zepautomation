@executeAllUserScenerios @Tests
Feature: Zeb Users
  Zeb dealing with the tokens
  Background: The USER fetches the bearer token
    Given The USER fetches the bearer token with the given endpoint

  @validation_telephone @testscenario1
  Scenario Outline: 001-Test to validate positive scenerio for Landline number  with more than 8 digits and less than 30 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0123456789       | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario2
  Scenario Outline: 001-Test to validate negative scenerio for Landline number  with less than 8 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 012346           | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario3
  Scenario Outline: 003-Test to validate positive scenerio for Landline number  with  30 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number               | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 011111111111111111111111111111 | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario4
  Scenario Outline: 004-Test to validate negative scenerio for Landline number  with more than 30 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number                | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0111111111111111111111111111112 | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario5
  Scenario Outline: 005-Test to validate negative scenerio for Landline number with no zero in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 11111111         | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario6
  Scenario Outline: 006-Test to validate negative scenerio for Landline number with two zero starting in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0011111111        | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario7
  Scenario Outline: 007-Test to validate positive scenerio for Landline number with spaces in between the phone numbers in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0111 11 1114566  | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario8
  Scenario Outline: 008-Test to validate positive scenerio for Landline number with braces in the phone numbers in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | (0411) 11114566  | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario9
  Scenario Outline: 009-Test to validate positive scenerio for Landline number with special charachters in the phone numbers in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | (0411)*11114566  | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario10
  Scenario Outline: 010-Test to validate positive scenerio for Mobile number  with more than 8 digits and less than 30 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0623456789       | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario11
  Scenario Outline: 011-Test to validate negative scenerio for Mobile number  with less than 8 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0623464          | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario12
  Scenario Outline: 012-Test to validate positive scenerio for Mobile number  with  30 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number               | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 061111111111111111111111111111 | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario13
  Scenario Outline: 013-Test to validate negative scenerio for Mobile number  with more than 30 digits in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number                | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0611111111111111111111111111112 | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario14
  Scenario Outline: 014-Test  to validate negative scenerio for Mobbile number with no zero in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 61111111         | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario15
  Scenario Outline: 015-Test  to validate negative scenerio for Mobile number with two zero starting in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 00611111111       | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario16
  Scenario Outline: 016-Test  to validate positive scenerio for Mobile number with spaces in between the phone numbers in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | 0611 11 1114566  | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario17
  Scenario Outline: 017-Test  to validate positive scenerio for Mobile number with braces in the phone numbers in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | (0611) 11114566  | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario18
  Scenario Outline: 018-Test  to validate positive scenerio for Mobile number with special charachters in the phone numbers in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | (0411)*11114566  | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario19
  Scenario Outline: 019-Test  to validate negative scenerio for phone number  starting with country code in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | +4911114566      | {questionnaire_id}    | true    | 0                      |

  @validation_telephone @testscenario20
  Scenario Outline: 020-Test  to validate negative scenerio for phone number  starting with a charachter or string in borrower
    Given fetch the borrower "<endpoint>"
    And Fetch the payload for the borrower with attributes "<first_name>" "<last_name>" "<salutation>" "<title>" "<telephone_number>" "<loan_questionnaire_id>" "<is_main>" "<household_situation_id>" and execute the service
    Then Validate the response code for borrower to check for error code and error message
    Examples:
      | endpoint                                          | first_name | last_name | salutation | title | telephone_number | loan_questionnaire_id | is_main | household_situation_id |
      | /api/v1/questionnaire/{questionnaire_id}/borrower | Elen       | Engineer  | mr         | dr    | t4911114566      | {questionnaire_id}    | true    | 0                      |