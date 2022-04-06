export default class ToolsUI {

    getToolTypes(){return cy.get("[class='accordion'] [class='element-group']")}

    getTools(){return cy.get("[class='menu-list'] [id*='item']")}


}