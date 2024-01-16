import { expect } from "@playwright/test"

export class MyAccountPage {
    private page: any
    private emailInput: any
    private passwordInput: any
    private loginButton: any
    private registerEmailInput: any
    private registerPasswordInput: any
    private registerButton: any

    constructor(page: any) {
        this.page = page

        this.emailInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('input[type="submit"][name="login"]')
        this.registerEmailInput = page.locator("#reg_email")
        this.registerPasswordInput = page.locator("#reg_password")
        this.registerButton = page.locator('input[type="submit"][name=register]')
    }

    goToMyAccountPage = async () => {
        await this.page.goto("/my-account")
        await this.page.waitForURL("/my-account/")
    };

    fillAccountLogin = async (email: string, password: string) => {
        await this.emailInput.waitFor()
        await this.emailInput.fill(email)
        await this.passwordInput.waitFor()
        await this.passwordInput.fill(password)
        await this.loginButton.waitFor()
        await this.loginButton.click()
    }

    registerNewAccount = async (email: string, password: string) => {
        await this.registerEmailInput.waitFor()
        await this.registerEmailInput.fill(email)
        await this.registerPasswordInput.waitFor()
        await this.registerPasswordInput.focus()
        await this.page.keyboard.type(password, { delay: 1000 })
        expect(await this.registerPasswordInput.inputValue()).toBe(password)
        await this.registerButton.waitFor()
        await this.registerButton.click()
    }
}
