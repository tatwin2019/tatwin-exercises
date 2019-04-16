$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Log_In.feature");
formatter.feature({
  "line": 2,
  "name": "Log in to the system",
  "description": "",
  "id": "log-in-to-the-system",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    }
  ]
});
formatter.scenarioOutline({
  "line": 16,
  "name": "User cannot log in to the system using worng username or password",
  "description": "",
  "id": "log-in-to-the-system;user-cannot-log-in-to-the-system-using-worng-username-or-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User opens Wikipedia page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User goes to Log in page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Log in page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User types \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User gets error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "log-in-to-the-system;user-cannot-log-in-to-the-system-using-worng-username-or-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "log-in-to-the-system;user-cannot-log-in-to-the-system-using-worng-username-or-password;;1"
    },
    {
      "cells": [
        "Tatwin2019",
        "test@1234"
      ],
      "line": 26,
      "id": "log-in-to-the-system;user-cannot-log-in-to-the-system-using-worng-username-or-password;;2"
    },
    {
      "cells": [
        "Tatwin",
        "test@123"
      ],
      "line": 27,
      "id": "log-in-to-the-system;user-cannot-log-in-to-the-system-using-worng-username-or-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9599066667,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User cannot log in to the system using worng username or password",
  "description": "",
  "id": "log-in-to-the-system;user-cannot-log-in-to-the-system-using-worng-username-or-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    },
    {
      "line": 15,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User opens Wikipedia page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User goes to Log in page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Log in page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User types \"Tatwin2019\" and \"test@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User gets error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_opens_Wikipedia_page()"
});
formatter.result({
  "duration": 3131878974,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_goes_to_Log_in_page()"
});
formatter.result({
  "duration": 558249847,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_in_page_is_displayed()"
});
formatter.result({
  "duration": 70761436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tatwin2019",
      "offset": 12
    },
    {
      "val": "test@1234",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.user_types_and(String,String)"
});
formatter.result({
  "duration": 100155487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_Log_in_button()"
});
formatter.result({
  "duration": 1103188513,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_gets_error_message()"
});
formatter.result({
  "duration": 68422564,
  "status": "passed"
});
formatter.after({
  "duration": 4105128616,
  "status": "passed"
});
formatter.before({
  "duration": 8664258051,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User cannot log in to the system using worng username or password",
  "description": "",
  "id": "log-in-to-the-system;user-cannot-log-in-to-the-system-using-worng-username-or-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    },
    {
      "line": 15,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User opens Wikipedia page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User goes to Log in page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Log in page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User types \"Tatwin\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User gets error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_opens_Wikipedia_page()"
});
formatter.result({
  "duration": 3025005538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_goes_to_Log_in_page()"
});
formatter.result({
  "duration": 471762051,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_in_page_is_displayed()"
});
formatter.result({
  "duration": 84760615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tatwin",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.user_types_and(String,String)"
});
formatter.result({
  "duration": 89193436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_Log_in_button()"
});
formatter.result({
  "duration": 606235077,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_gets_error_message()"
});
formatter.result({
  "duration": 73600410,
  "status": "passed"
});
formatter.after({
  "duration": 4088474667,
  "status": "passed"
});
});