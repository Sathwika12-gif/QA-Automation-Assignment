# QA Automation Assignment

This project contains UI and API automation developed using **Playwright** and **JavaScript**, following the **Page Object Model (POM)** design pattern.

---

## Tech Stack

- Playwright
- JavaScript
- Page Object Model (POM)
- Node.js

---

## Project Structure

```
pages/          # Page Object classes
tests/          # UI and API test cases
test-data/      # Test data and configuration
utils/          # Utility classes
output/         # Generated output files
screenshots/    # Test report screenshot
```

---

## Installation

```bash
npm install
```

---

## Run UI Tests

```bash
npx playwright test tests/ui.spec.js
```

---

## Run API Tests

```bash
npx playwright test tests/api.spec.js
```

---

## Run All Tests

```bash
npx playwright test
```

---

## View HTML Report

```bash
npx playwright show-report
```

---

## Assignment Coverage

### UI Automation

- Login to DemoQA Book Store
- Validate logged-in username
- Navigate to Book Store
- Search for the required book
- Validate search results
- Capture Title, Author and Publisher
- Save book details to `output/bookDetails.txt`
- Logout

### API Automation

- Create a user
- Validate HTTP status code
- Store generated user ID
- Attempt to retrieve the created user (ReqRes mock API limitation)
- Update user's name
- Validate updated response

---

## Test Execution Report

![Playwright Test Report](screenshots/test-report.png)

---

## Note

The API automation uses the public **ReqRes** API.

The free-tier API enforces a daily request limit. If the API returns **HTTP 429 (Too Many Requests)**, please wait until the quota resets or use a valid API key before re-running the API tests.