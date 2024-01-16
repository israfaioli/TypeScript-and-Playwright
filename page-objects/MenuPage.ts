import { expect } from "@playwright/test";

export class MenuPage {
    private page: any
    private loggedUserLabel: any

    constructor(page: any) {
        this.page = page;
        this.loggedUserLabel = page.locator('div[class="woocommerce-MyAccount-content"] > p > strong')
    }

    checkSuccessfulLogin = async (expectedUserName: string) => {
        await expect(this.loggedUserLabel).toHaveText(expectedUserName, { timeout: 5000 })
    }
}