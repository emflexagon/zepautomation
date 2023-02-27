$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("zeb.feature");
formatter.feature({
  "line": 2,
  "name": "Zeb Users",
  "description": "Zeb dealing with the tokens",
  "id": "zeb-users",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    },
    {
      "line": 1,
      "name": "@Tests"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "001-Test scenerio to validate positive scenerio for Landline number  with more than 8 digits and less than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;001-test-scenerio-to-validate-positive-scenerio-for-landline-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@validation_telephone"
    },
    {
      "line": 7,
      "name": "@testscenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "zeb-users;001-test-scenerio-to-validate-positive-scenerio-for-landline-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 13,
      "id": "zeb-users;001-test-scenerio-to-validate-positive-scenerio-for-landline-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0123456789",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 14,
      "id": "zeb-users;001-test-scenerio-to-validate-positive-scenerio-for-landline-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 3161976500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "001-Test scenerio to validate positive scenerio for Landline number  with more than 8 digits and less than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;001-test-scenerio-to-validate-positive-scenerio-for-landline-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 7,
      "name": "@testscenario1"
    },
    {
      "line": 7,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0123456789\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 2755600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0123456789",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 93
    },
    {
      "val": "true",
      "offset": 114
    },
    {
      "val": "0",
      "offset": 121
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 328532500,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 562900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "001-Test scenerio to validate negative scenerio for Landline number  with less than 8 digits in borrower",
  "description": "",
  "id": "zeb-users;001-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-less-than-8-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@validation_telephone"
    },
    {
      "line": 16,
      "name": "@testscenario2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "zeb-users;001-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-less-than-8-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 22,
      "id": "zeb-users;001-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-less-than-8-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "012346",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 23,
      "id": "zeb-users;001-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-less-than-8-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 285078200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "001-Test scenerio to validate negative scenerio for Landline number  with less than 8 digits in borrower",
  "description": "",
  "id": "zeb-users;001-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-less-than-8-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 16,
      "name": "@testscenario2"
    },
    {
      "line": 16,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"012346\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "012346",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 89
    },
    {
      "val": "true",
      "offset": 110
    },
    {
      "val": "0",
      "offset": 117
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 297203400,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 3300700,
  "error_message": "java.lang.AssertionError: expected:\u003c422\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message(getUsersStepDefinition.java:61)\r\n\tat ✽.Then Validate the response code for borrower to check for error code and error message(zeb.feature:20)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "003-Test scenerio to validate positive scenerio for Landline number  with  30 digits in borrower",
  "description": "",
  "id": "zeb-users;003-test-scenerio-to-validate-positive-scenerio-for-landline-number--with--30-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@validation_telephone"
    },
    {
      "line": 25,
      "name": "@testscenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "zeb-users;003-test-scenerio-to-validate-positive-scenerio-for-landline-number--with--30-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 31,
      "id": "zeb-users;003-test-scenerio-to-validate-positive-scenerio-for-landline-number--with--30-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "011111111111111111111111111111",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 32,
      "id": "zeb-users;003-test-scenerio-to-validate-positive-scenerio-for-landline-number--with--30-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 253316300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "003-Test scenerio to validate positive scenerio for Landline number  with  30 digits in borrower",
  "description": "",
  "id": "zeb-users;003-test-scenerio-to-validate-positive-scenerio-for-landline-number--with--30-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 25,
      "name": "@testscenario3"
    },
    {
      "line": 25,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"011111111111111111111111111111\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "011111111111111111111111111111",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 113
    },
    {
      "val": "true",
      "offset": 134
    },
    {
      "val": "0",
      "offset": 141
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 197233600,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 1224100,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:29)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "004-Test scenerio to validate negative scenerio for Landline number  with more than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;004-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-more-than-30-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@validation_telephone"
    },
    {
      "line": 34,
      "name": "@testscenario4"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "zeb-users;004-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-more-than-30-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 40,
      "id": "zeb-users;004-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-more-than-30-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0111111111111111111111111111112",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 41,
      "id": "zeb-users;004-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-more-than-30-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 235266000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "004-Test scenerio to validate negative scenerio for Landline number  with more than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;004-test-scenerio-to-validate-negative-scenerio-for-landline-number--with-more-than-30-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 34,
      "name": "@testscenario4"
    },
    {
      "line": 34,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0111111111111111111111111111112\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 36900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0111111111111111111111111111112",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 114
    },
    {
      "val": "true",
      "offset": 135
    },
    {
      "val": "0",
      "offset": 142
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 184314100,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 167100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "005-Test scenerio to validate negative scenerio for Landline number with no zero in borrower",
  "description": "",
  "id": "zeb-users;005-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-no-zero-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@validation_telephone"
    },
    {
      "line": 43,
      "name": "@testscenario5"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "zeb-users;005-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-no-zero-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 49,
      "id": "zeb-users;005-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-no-zero-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "11111111",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 50,
      "id": "zeb-users;005-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-no-zero-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 225253200,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "005-Test scenerio to validate negative scenerio for Landline number with no zero in borrower",
  "description": "",
  "id": "zeb-users;005-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-no-zero-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 43,
      "name": "@testscenario5"
    },
    {
      "line": 43,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"11111111\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "11111111",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 91
    },
    {
      "val": "true",
      "offset": 112
    },
    {
      "val": "0",
      "offset": 119
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 179527200,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 381400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "006-Test scenerio to validate negative scenerio for Landline number with two zero starting in borrower",
  "description": "",
  "id": "zeb-users;006-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-two-zero-starting-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@validation_telephone"
    },
    {
      "line": 52,
      "name": "@testscenario6"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "zeb-users;006-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-two-zero-starting-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 58,
      "id": "zeb-users;006-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-two-zero-starting-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0011111111",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 59,
      "id": "zeb-users;006-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-two-zero-starting-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 250123500,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "006-Test scenerio to validate negative scenerio for Landline number with two zero starting in borrower",
  "description": "",
  "id": "zeb-users;006-test-scenerio-to-validate-negative-scenerio-for-landline-number-with-two-zero-starting-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@testscenario6"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 52,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0011111111\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 76500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0011111111",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 93
    },
    {
      "val": "true",
      "offset": 114
    },
    {
      "val": "0",
      "offset": 121
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 160977600,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 147600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "007-Test scenerio to validate positive scenerio for Landline number with spaces in between the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;007-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-spaces-in-between-the-phone-numbers-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@validation_telephone"
    },
    {
      "line": 61,
      "name": "@testscenario7"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "zeb-users;007-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-spaces-in-between-the-phone-numbers-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 67,
      "id": "zeb-users;007-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-spaces-in-between-the-phone-numbers-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0111 11 1114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 68,
      "id": "zeb-users;007-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-spaces-in-between-the-phone-numbers-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 227731900,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "007-Test scenerio to validate positive scenerio for Landline number with spaces in between the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;007-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-spaces-in-between-the-phone-numbers-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@testscenario7"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 61,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0111 11 1114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0111 11 1114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 98
    },
    {
      "val": "true",
      "offset": 119
    },
    {
      "val": "0",
      "offset": 126
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 196037900,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 338800,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:65)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "008-Test scenerio to validate positive scenerio for Landline number with braces in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;008-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-braces-in-the-phone-numbers-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@validation_telephone"
    },
    {
      "line": 70,
      "name": "@testscenario8"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 75,
  "name": "",
  "description": "",
  "id": "zeb-users;008-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-braces-in-the-phone-numbers-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 76,
      "id": "zeb-users;008-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-braces-in-the-phone-numbers-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "(0411) 11114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 77,
      "id": "zeb-users;008-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-braces-in-the-phone-numbers-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 239254900,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "008-Test scenerio to validate positive scenerio for Landline number with braces in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;008-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-braces-in-the-phone-numbers-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@testscenario8"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 70,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"(0411) 11114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 69100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "(0411) 11114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 98
    },
    {
      "val": "true",
      "offset": 119
    },
    {
      "val": "0",
      "offset": 126
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 177848700,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 794400,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:74)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 80,
  "name": "009-Test scenerio to validate positive scenerio for Landline number with special charachters in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;009-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-special-charachters-in-the-phone-numbers-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@validation_telephone"
    },
    {
      "line": 79,
      "name": "@testscenario9"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "zeb-users;009-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-special-charachters-in-the-phone-numbers-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 85,
      "id": "zeb-users;009-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-special-charachters-in-the-phone-numbers-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "(0411)*11114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 86,
      "id": "zeb-users;009-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-special-charachters-in-the-phone-numbers-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 207570600,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "009-Test scenerio to validate positive scenerio for Landline number with special charachters in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;009-test-scenerio-to-validate-positive-scenerio-for-landline-number-with-special-charachters-in-the-phone-numbers-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@testscenario9"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 79,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"(0411)*11114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 52100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "(0411)*11114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 98
    },
    {
      "val": "true",
      "offset": 119
    },
    {
      "val": "0",
      "offset": 126
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 552017900,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 1500500,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:83)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "010-Test scenerio to validate positive scenerio for Mobile number  with more than 8 digits and less than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;010-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@validation_telephone"
    },
    {
      "line": 88,
      "name": "@testscenario10"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "zeb-users;010-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 94,
      "id": "zeb-users;010-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0623456789",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 95,
      "id": "zeb-users;010-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 215807100,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "010-Test scenerio to validate positive scenerio for Mobile number  with more than 8 digits and less than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;010-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with-more-than-8-digits-and-less-than-30-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@testscenario10"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 88,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0623456789\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 51700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0623456789",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 93
    },
    {
      "val": "true",
      "offset": 114
    },
    {
      "val": "0",
      "offset": 121
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 262636500,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 119800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 98,
  "name": "011-Test scenerio to validate negative scenerio for Mobile number  with less than 8 digits in borrower",
  "description": "",
  "id": "zeb-users;011-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-less-than-8-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 97,
      "name": "@validation_telephone"
    },
    {
      "line": 97,
      "name": "@testscenario11"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "zeb-users;011-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-less-than-8-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 103,
      "id": "zeb-users;011-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-less-than-8-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0623464",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 104,
      "id": "zeb-users;011-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-less-than-8-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 189491100,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "011-Test scenerio to validate negative scenerio for Mobile number  with less than 8 digits in borrower",
  "description": "",
  "id": "zeb-users;011-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-less-than-8-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 97,
      "name": "@testscenario11"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 97,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0623464\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 48300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0623464",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 90
    },
    {
      "val": "true",
      "offset": 111
    },
    {
      "val": "0",
      "offset": 118
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 161735900,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 267600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "012-Test scenerio to validate positive scenerio for Mobile number  with  30 digits in borrower",
  "description": "",
  "id": "zeb-users;012-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with--30-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@validation_telephone"
    },
    {
      "line": 106,
      "name": "@testscenario12"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 111,
  "name": "",
  "description": "",
  "id": "zeb-users;012-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with--30-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 112,
      "id": "zeb-users;012-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with--30-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "061111111111111111111111111111",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 113,
      "id": "zeb-users;012-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with--30-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 235570200,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "012-Test scenerio to validate positive scenerio for Mobile number  with  30 digits in borrower",
  "description": "",
  "id": "zeb-users;012-test-scenerio-to-validate-positive-scenerio-for-mobile-number--with--30-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@testscenario12"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 106,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"061111111111111111111111111111\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 75800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "061111111111111111111111111111",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 113
    },
    {
      "val": "true",
      "offset": 134
    },
    {
      "val": "0",
      "offset": 141
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 154973900,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 479800,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:110)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 116,
  "name": "013-Test scenerio to validate negative scenerio for Mobile number  with more than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;013-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-more-than-30-digits-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 115,
      "name": "@validation_telephone"
    },
    {
      "line": 115,
      "name": "@testscenario13"
    }
  ]
});
formatter.step({
  "line": 117,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 120,
  "name": "",
  "description": "",
  "id": "zeb-users;013-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-more-than-30-digits-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 121,
      "id": "zeb-users;013-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-more-than-30-digits-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0611111111111111111111111111112",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 122,
      "id": "zeb-users;013-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-more-than-30-digits-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 214805900,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "013-Test scenerio to validate negative scenerio for Mobile number  with more than 30 digits in borrower",
  "description": "",
  "id": "zeb-users;013-test-scenerio-to-validate-negative-scenerio-for-mobile-number--with-more-than-30-digits-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 115,
      "name": "@testscenario13"
    },
    {
      "line": 115,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 117,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0611111111111111111111111111112\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0611111111111111111111111111112",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 114
    },
    {
      "val": "true",
      "offset": 135
    },
    {
      "val": "0",
      "offset": 142
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 153539000,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 135800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 125,
  "name": "014-Test scenerio to validate negative scenerio for Mobbile number with no zero in borrower",
  "description": "",
  "id": "zeb-users;014-test-scenerio-to-validate-negative-scenerio-for-mobbile-number-with-no-zero-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@validation_telephone"
    },
    {
      "line": 124,
      "name": "@testscenario14"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 129,
  "name": "",
  "description": "",
  "id": "zeb-users;014-test-scenerio-to-validate-negative-scenerio-for-mobbile-number-with-no-zero-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 130,
      "id": "zeb-users;014-test-scenerio-to-validate-negative-scenerio-for-mobbile-number-with-no-zero-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "61111111",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 131,
      "id": "zeb-users;014-test-scenerio-to-validate-negative-scenerio-for-mobbile-number-with-no-zero-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 237067900,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "014-Test scenerio to validate negative scenerio for Mobbile number with no zero in borrower",
  "description": "",
  "id": "zeb-users;014-test-scenerio-to-validate-negative-scenerio-for-mobbile-number-with-no-zero-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 124,
      "name": "@testscenario14"
    },
    {
      "line": 124,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"61111111\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "61111111",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 91
    },
    {
      "val": "true",
      "offset": 112
    },
    {
      "val": "0",
      "offset": 119
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 153495400,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 159600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 134,
  "name": "015-Test scenerio to validate negative scenerio for Mobile number with two zero starting in borrower",
  "description": "",
  "id": "zeb-users;015-test-scenerio-to-validate-negative-scenerio-for-mobile-number-with-two-zero-starting-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 133,
      "name": "@validation_telephone"
    },
    {
      "line": 133,
      "name": "@testscenario15"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 138,
  "name": "",
  "description": "",
  "id": "zeb-users;015-test-scenerio-to-validate-negative-scenerio-for-mobile-number-with-two-zero-starting-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 139,
      "id": "zeb-users;015-test-scenerio-to-validate-negative-scenerio-for-mobile-number-with-two-zero-starting-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "00611111111",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 140,
      "id": "zeb-users;015-test-scenerio-to-validate-negative-scenerio-for-mobile-number-with-two-zero-starting-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 255312600,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "015-Test scenerio to validate negative scenerio for Mobile number with two zero starting in borrower",
  "description": "",
  "id": "zeb-users;015-test-scenerio-to-validate-negative-scenerio-for-mobile-number-with-two-zero-starting-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 133,
      "name": "@testscenario15"
    },
    {
      "line": 133,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"00611111111\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "00611111111",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 94
    },
    {
      "val": "true",
      "offset": 115
    },
    {
      "val": "0",
      "offset": 122
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 155052800,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 255900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 143,
  "name": "016-Test scenerio to validate positive scenerio for Mobile number with spaces in between the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;016-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-spaces-in-between-the-phone-numbers-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 142,
      "name": "@validation_telephone"
    },
    {
      "line": 142,
      "name": "@testscenario16"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "zeb-users;016-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-spaces-in-between-the-phone-numbers-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 148,
      "id": "zeb-users;016-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-spaces-in-between-the-phone-numbers-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "0611 11 1114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 149,
      "id": "zeb-users;016-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-spaces-in-between-the-phone-numbers-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 230788100,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "016-Test scenerio to validate positive scenerio for Mobile number with spaces in between the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;016-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-spaces-in-between-the-phone-numbers-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 142,
      "name": "@testscenario16"
    },
    {
      "line": 142,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"0611 11 1114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 447000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "0611 11 1114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 98
    },
    {
      "val": "true",
      "offset": 119
    },
    {
      "val": "0",
      "offset": 126
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 171922200,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 275900,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:146)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 152,
  "name": "017-Test scenerio to validate positive scenerio for Mobile number with braces in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;017-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-braces-in-the-phone-numbers-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 151,
      "name": "@validation_telephone"
    },
    {
      "line": 151,
      "name": "@testscenario17"
    }
  ]
});
formatter.step({
  "line": 153,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 154,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "zeb-users;017-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-braces-in-the-phone-numbers-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 157,
      "id": "zeb-users;017-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-braces-in-the-phone-numbers-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "(0611) 11114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 158,
      "id": "zeb-users;017-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-braces-in-the-phone-numbers-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 256046800,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "017-Test scenerio to validate positive scenerio for Mobile number with braces in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;017-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-braces-in-the-phone-numbers-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 151,
      "name": "@testscenario17"
    },
    {
      "line": 151,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 153,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 154,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"(0611) 11114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 135300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "(0611) 11114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 98
    },
    {
      "val": "true",
      "offset": 119
    },
    {
      "val": "0",
      "offset": 126
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 176474500,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 272700,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:155)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 161,
  "name": "018-Test scenerio to validate positive scenerio for Mobile number with special charachters in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;018-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-special-charachters-in-the-phone-numbers-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 160,
      "name": "@validation_telephone"
    },
    {
      "line": 160,
      "name": "@testscenario18"
    }
  ]
});
formatter.step({
  "line": 162,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.examples({
  "line": 165,
  "name": "",
  "description": "",
  "id": "zeb-users;018-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-special-charachters-in-the-phone-numbers-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 166,
      "id": "zeb-users;018-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-special-charachters-in-the-phone-numbers-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "(0411)*11114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 167,
      "id": "zeb-users;018-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-special-charachters-in-the-phone-numbers-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 244207000,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "018-Test scenerio to validate positive scenerio for Mobile number with special charachters in the phone numbers in borrower",
  "description": "",
  "id": "zeb-users;018-test-scenerio-to-validate-positive-scenerio-for-mobile-number-with-special-charachters-in-the-phone-numbers-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 160,
      "name": "@testscenario18"
    },
    {
      "line": 160,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 162,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"(0411)*11114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Validate the response code for borrower",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 59500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "(0411)*11114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 98
    },
    {
      "val": "true",
      "offset": 119
    },
    {
      "val": "0",
      "offset": 126
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 194938000,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower()"
});
formatter.result({
  "duration": 341700,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat common.methods.CommonMethods.responseStatusCodeValidation(CommonMethods.java:57)\r\n\tat stepDefenition.getUsersStepDefinition.validate_the_response_code_for_borrower(getUsersStepDefinition.java:54)\r\n\tat ✽.Then Validate the response code for borrower(zeb.feature:164)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 170,
  "name": "019-Test scenerio to validate negative scenerio for phone number  starting with country code in borrower",
  "description": "",
  "id": "zeb-users;019-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-country-code-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 169,
      "name": "@validation_telephone"
    },
    {
      "line": 169,
      "name": "@testscenario19"
    }
  ]
});
formatter.step({
  "line": 171,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 172,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 174,
  "name": "",
  "description": "",
  "id": "zeb-users;019-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-country-code-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 175,
      "id": "zeb-users;019-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-country-code-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "+4911114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 176,
      "id": "zeb-users;019-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-country-code-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 223183300,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "019-Test scenerio to validate negative scenerio for phone number  starting with country code in borrower",
  "description": "",
  "id": "zeb-users;019-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-country-code-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 169,
      "name": "@testscenario19"
    },
    {
      "line": 169,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 171,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 172,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"+4911114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 53000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "+4911114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 94
    },
    {
      "val": "true",
      "offset": 115
    },
    {
      "val": "0",
      "offset": 122
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 164779400,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 111800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 179,
  "name": "020-Test scenerio to validate negative scenerio for phone number  starting with a charachter or string in borrower",
  "description": "",
  "id": "zeb-users;020-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-a-charachter-or-string-in-borrower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 178,
      "name": "@validation_telephone"
    },
    {
      "line": 178,
      "name": "@testscenario20"
    }
  ]
});
formatter.step({
  "line": 180,
  "name": "fetch the borrower \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "Fetch the payload for the borrower with attributes \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003csalutation\u003e\" \"\u003ctitle\u003e\" \"\u003ctelephone_number\u003e\" \"\u003cloan_questionnaire_id\u003e\" \"\u003cis_main\u003e\" \"\u003chousehold_situation_id\u003e\" and execute the service",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 183,
  "name": "",
  "description": "",
  "id": "zeb-users;020-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-a-charachter-or-string-in-borrower;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "first_name",
        "last_name",
        "salutation",
        "title",
        "telephone_number",
        "loan_questionnaire_id",
        "is_main",
        "household_situation_id"
      ],
      "line": 184,
      "id": "zeb-users;020-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-a-charachter-or-string-in-borrower;;1"
    },
    {
      "cells": [
        "/api/v1/questionnaire/{questionnaire_id}/borrower",
        "Elen",
        "Engineer",
        "mr",
        "dr",
        "t4911114566",
        "{questionnaire_id}",
        "true",
        "0"
      ],
      "line": 185,
      "id": "zeb-users;020-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-a-charachter-or-string-in-borrower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "The USER fetches the bearer token",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The USER fetches the bearer token with the given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "getUsersStepDefinition.The_USER_fetches_the_bearer_token_with_the_given_endpoint()"
});
formatter.result({
  "duration": 214866400,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "020-Test scenerio to validate negative scenerio for phone number  starting with a charachter or string in borrower",
  "description": "",
  "id": "zeb-users;020-test-scenerio-to-validate-negative-scenerio-for-phone-number--starting-with-a-charachter-or-string-in-borrower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 178,
      "name": "@testscenario20"
    },
    {
      "line": 1,
      "name": "@Tests"
    },
    {
      "line": 178,
      "name": "@validation_telephone"
    },
    {
      "line": 1,
      "name": "@executeAllUserScenerios"
    }
  ]
});
formatter.step({
  "line": 180,
  "name": "fetch the borrower \"/api/v1/questionnaire/{questionnaire_id}/borrower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "Fetch the payload for the borrower with attributes \"Elen\" \"Engineer\" \"mr\" \"dr\" \"t4911114566\" \"{questionnaire_id}\" \"true\" \"0\" and execute the service",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Validate the response code for borrower to check for error code and error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/questionnaire/{questionnaire_id}/borrower",
      "offset": 20
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_borrower(String)"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elen",
      "offset": 52
    },
    {
      "val": "Engineer",
      "offset": 59
    },
    {
      "val": "mr",
      "offset": 70
    },
    {
      "val": "dr",
      "offset": 75
    },
    {
      "val": "t4911114566",
      "offset": 80
    },
    {
      "val": "{questionnaire_id}",
      "offset": 94
    },
    {
      "val": "true",
      "offset": 115
    },
    {
      "val": "0",
      "offset": 122
    }
  ],
  "location": "getUsersStepDefinition.fetch_the_payload_for_the_borrower_with_attributes_and_execute_the_service(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 156632800,
  "status": "passed"
});
formatter.match({
  "location": "getUsersStepDefinition.validate_the_response_code_for_borrower_to_check_for_error_code_and_error_message()"
});
formatter.result({
  "duration": 200100,
  "status": "passed"
});
});