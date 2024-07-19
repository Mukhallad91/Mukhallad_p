// tests/step_definitions/example.steps.js
const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let page;

Given('I visit the example page', async function () {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto(process.env.URL);  // Ensure the URL is set in your .env file
});

Then('the title should be {string}', async function (expectedTitle) {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
  await page.close();
});

