import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import ToolsUI from '../../pages/ToolsUI'
import ElementsPage from "../../pages/ElementsPage";

const toolsUI = new ToolsUI()
const elementsPage = new ElementsPage()

Given("Click tool type named {}", (toolType) => {
    toolsUI.getToolTypes().contains(new RegExp("^" + toolType + "$")).click()
})

Given("Click tool named {}", (toolName) => {
    toolsUI.getTools().contains(new RegExp("^" + toolName + "$")).click()
})

Given("Click text box submit", () => {
    elementsPage.clickSubmit()
})