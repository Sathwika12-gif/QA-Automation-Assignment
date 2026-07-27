const { expect } = require('@playwright/test');

const COLUMN = {
    IMAGE: 0,
    TITLE: 1,
    AUTHOR: 2,
    PUBLISHER: 3
};

class BookStorePage {

    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#searchBox');
        this.logoutBtn = page.getByRole('button', { name: 'Log out' });
    }

    bookLink(bookName) {
        return this.page.locator(`[id="see-book-${bookName}"]`);
    }

    bookRow(bookName) {
        return this.bookLink(bookName).locator('xpath=ancestor::tr');
    }

    async searchBook(bookName) {
        await this.searchBox.fill(bookName);
        await expect(this.bookLink(bookName)).toBeVisible();
    }

    async verifyBook(bookName) {
        await expect(this.bookLink(bookName)).toBeVisible();
    }

    async getBookDetails(bookName) {
        const cells = this.bookRow(bookName).locator('td');

        return {
            title: (await cells.nth(COLUMN.TITLE).textContent()).trim(),
            author: (await cells.nth(COLUMN.AUTHOR).textContent()).trim(),
            publisher: (await cells.nth(COLUMN.PUBLISHER).textContent()).trim()
        };
    }

    async logout() {
        await this.logoutBtn.click();
    }
}

module.exports = BookStorePage;