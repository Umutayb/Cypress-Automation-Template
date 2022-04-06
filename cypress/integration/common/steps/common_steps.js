import { Given , And , Then , When, Before, After} from "cypress-cucumber-preprocessor/steps";

Given('Navigate to {}', (url) => { cy.visit('https://'+url); })

Before(() => {})

After(() => {cy.end()})