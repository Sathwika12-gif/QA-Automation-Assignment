const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {

        this.page = page;

        this.username = page.locator('#userName');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login');
        this.loggedUser = page.locator('#userName-value');
        this.logoutBtn = page.getByRole('button', { name: 'Logout' });
        this.goToBookStoreBtn = page.getByRole('button', { name: 'Go To Book Store' });
    }
    async navigateToLogin() {
        await this.page.getByText('Login', { exact: true }).first().click();
        await this.page.waitForURL(/login/);
        await expect(this.username).toBeVisible();
    }
    async goToBookStore() {
        await this.goToBookStoreBtn.click();
    }

    async login(user, pass) {
        await expect(this.username).toBeVisible();
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async validateLogin(user) {
        await expect(this.page).toHaveURL(/profile/);
        await expect(this.loggedUser).toHaveText(user);
        await expect(this.logoutBtn).toBeVisible();
    }
}

module.exports = LoginPage;