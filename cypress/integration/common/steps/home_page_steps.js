import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../pages/HomePage'

const homePage = new HomePage()

Given("Click category card named {}", (cardName) => {
    homePage.getCategoryCards().contains(new RegExp("^" + cardName + "$")).click()
})
 