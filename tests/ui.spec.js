const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const BookStorePage = require('../pages/BookStorePage');
const credentials = require('../test-data/credentials');
const { writeBook } = require('../utils/FileUtils');

test('Book Store UI Assignment', async ({ page }) => {
    await page.goto('/books');
    const login = new LoginPage(page);
    await login.navigateToLogin();
    await login.login(credentials.username, credentials.password);
    await login.validateLogin(credentials.username);
    await login.goToBookStore();
    const bookPage = new BookStorePage(page);
    await bookPage.searchBook("Learning JavaScript Design Patterns");
    await bookPage.verifyBook("Learning JavaScript Design Patterns");
    const details = await bookPage.getBookDetails(
        'Learning JavaScript Design Patterns'
    );
    writeBook(details);
    await bookPage.logout();

});