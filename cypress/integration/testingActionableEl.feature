Feature: interacting with elements

    Background: Background name
        Given the user navigates to "https://rahulshettyacademy.com/AutomationPractice/"
        And the field "AUTOMATIN_PRACTICE_TITLE" contains "Practice Page"

    #   Scenario: test checking/unchecking a checkbox
    #
    #       When the user checks a "AUTOMATIN_PRACTICE_FIRST_CHECKBOX" checkbox
    #       And the user unchecks a "AUTOMATIN_PRACTICE_FIRST_CHECKBOX" checkbox

    Scenario: test visible/not visible

        And the field "HIDE_BUTTON" is visible
        Given the user clicks on "HIDE_BUTTON"
        Then the field "INPUT_FIELD" is not visible
        And the field "SHOW_BUTTON" is visible
        Given the user clicks on "SHOW_BUTTON"
        Then the field "INPUT_FIELD" is visible