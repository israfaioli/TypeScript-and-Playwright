import { test, expect } from "@playwright/test"
import { MenuPage } from "../page-objects/MenuPage"
import { MyAccountPage } from "../page-objects/MyAccountPage"
import { accountData } from "../data/accountData"
import { v4 as uuidv4 } from 'uuid'

test("Test 01 - Login at automation practice", async ({ page }) => {
    const myAccountPage = new MyAccountPage(page);
    const menuPage = new MenuPage(page)
    const expectedUserName = 'automation14'

    await myAccountPage.goToMyAccountPage();
    await myAccountPage.fillAccountLogin(accountData.email, accountData.password)
    await menuPage.checkSuccessfulLogin(expectedUserName)
})

test("Test 02 - Register new user at automation practice", async ({ page }) => {
    const myAccountPage = new MyAccountPage(page)
    const menuPage = new MenuPage(page)
    const newUserName = uuidv4()

    await myAccountPage.goToMyAccountPage()
    await myAccountPage.registerNewAccount(newUserName + '@gmail.com', 'Automation12345@')
    await menuPage.checkSuccessfulLogin(newUserName)
})