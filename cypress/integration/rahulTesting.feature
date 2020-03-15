Feature: Cart

    Background: Background name
        Given the user navigates to "https://rahulshettyacademy.com/seleniumPractise/"
        And the field "TITLE" contains "GREENKART"

    Scenario Outline: Check search functionality

        When the user enters value "<name>" in the field "SEARCH_FIELD"
        Then the field "PRODUCT_TITLE" contains "<name>"

        Examples:

            | name   |
            | Potato |

    Scenario: Verify a message appears if no match is found from the search

        When the user enters value "noSuchAproduc" in the field "SEARCH_FIELD"
        Then the field "EMPTY_CANVAS" contains "Sorry, no products matched your search!"
        And the field "EMPTY_CANVAS" contains "Enter a different keyword and try."

    Scenario: Add a product to the cart

        When the user enters value "Potato" in the field "SEARCH_FIELD"
        And the user clicks on "ADD_BUTTON"
        Then the field "ADD_BUTTON" contains "ADDED"

    Scenario: Verify the right products appear after a search is performed
        When the user enters value "ca" in the field "SEARCH_FIELD"
        And the user pauses for 1000 ms
        Then the field "ALL_PRODUCTS_TITLES" contains the list ["Cauliflower","Carrot","Capsicum","Cashews"]


