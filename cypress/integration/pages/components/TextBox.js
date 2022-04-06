export default class TextBox {
    
    getSubmitButton(){return cy.get("button[id='submit']")}

    getNameInput(){return cy.get("button[id='submit']")}

    getEmailInput(){return cy.get("button[id='submit']")}

    getCurrentAddressInput(){return cy.get("button[id='submit']")}

    getPermanentAddressInput(){return cy.get("button[id='submit']")}

    clickSubmit(){this.getSubmitButton().click()}

    fillNameInput(input){this.getNameInput().type(input)}
}