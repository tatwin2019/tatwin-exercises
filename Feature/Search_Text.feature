@Search
Feature: Searching an article

Scenario: User can search a article by providing a text
	Given User opens Wikipedia page
	When User types "Selenium" to search textbox
	And User clicks on search button
	Then Article is displayed