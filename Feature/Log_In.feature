@LogIn
Feature: Log in to the system

@Positive
Scenario: User can log in to the system using existing username and password
	Given User opens Wikipedia page
	When User goes to Log in page
	Then Log in page is displayed
	When User types username and password
	| username   | password |
	| Tatwin2019 | test@123 |
	And User clicks on Log in button
	Then User is logged and "Tatwin2019" is displayed

@Negative
Scenario Outline: User cannot log in to the system using worng username or password
	Given User opens Wikipedia page
	When User goes to Log in page
	Then Log in page is displayed
	When User types "<username>" and "<password>"
	And User clicks on Log in button
	Then User gets error message
	
Examples:
	| username   | password  |
	| Tatwin2019 | test@1234 |
	| Tatwin	 | test@123  |