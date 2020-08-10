import { Given } from "cypress-cucumber-preprocessor/steps";
import * as selectors from "./locators.json"
import { getArrayOfStrings } from '../utils';

Given("the user navigates to {string}", (url) => {
    cy
        .visit(url);
})

Given(/the field "(.*)" (contains|not contains) "(.*)"$/, (field, condition, content) => {

    const mainElement = selectors[field]
    if (condition === 'contains') {

        condition = 'contain'
    } else {

        condition = 'not.contain'
    }
    cy
        .get(mainElement).
        should(condition, content)
})

Given("the user enters value {string} in the field {string}", (value, field) => {
    const mainElement = selectors[field]
    cy
        .get(mainElement)
        .clear()
        .type(value)

})

Given("the user clicks on {string}", (element) => {
    const mainElement = selectors[element]
    cy
        .get(mainElement)
        .click()
})

Given("the user pauses for {int} ms", (time) => {
    cy.wait(time);
})

Given(/the user (checks|unchecks) a "(.*)" checkbox$/, (condition, element) => {

    const mainElement = selectors[element];

    if (condition === "checks") {
        condition = 'be'
    }
    else if (condition = 'unchecks') {
        condition = 'not.be'
    }
    cy.get(mainElement).click().should(`${condition}.checked`)
})

Given(/the field "(.*)" contains the list( \[(.*)\])?/, (element, listValues) => {
    const mainElement = selectors[element];
    const arrayValues = getArrayOfStrings(listValues).flat(2);
    cy
        .get(mainElement)
        .then(($element) => {
            arrayValues.forEach((el, index) => {
                const productTitles = $element.text()
                cy.wrap(productTitles).should('contains', el)
            });
     });
})

Given(/the field "(.*)" is (visible|not visible)$/, (element, condition) => {

    const mainElement = selectors[element];
    if (condition === "visible") {
        condition = "be"
    }
    else if (condition === "not visible") {
        condition = "not.be"
    }
    cy.get(mainElement).should(`${condition}.visible`)
});