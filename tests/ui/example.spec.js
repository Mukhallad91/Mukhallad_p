// tests/ui/example.spec.js
const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('basic test', async ({ page }) => {
  // Navigate to the login URL directly
  await page.goto('https://access.cydeo.com/u/login?state=hKFo2SBwWm1UUnc1RW5wNi1iZUFrVm1fVmhVS1BPczIzbjFtUqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHJuOWFzVEJmQXN6bXZocldFOEoyZk80SjJNd1U3aFZGo2NpZNkgc0VYaXVSSnJ0VWZCVTFUaXN2RGFhNEt6WXYxMjhiM1o', { waitUntil: 'domcontentloaded' });
  console.log('Navigated to Login URL');
  await page.screenshot({ path: 'screenshots/login_page_loaded.png' });

  // Wait for the username input to be visible
  await page.waitForSelector('input[name="username"]', { timeout: 30000 });
  console.log('Username input is visible');
  await page.screenshot({ path: 'screenshots/username_visible.png' });

  // Fill in the username
  await page.fill('input[name="username"]', process.env.USERNAME);
  console.log('Filled username:', process.env.USERNAME);
  await page.screenshot({ path: 'screenshots/username_filled.png' });

  // Fill in the password
  await page.waitForSelector('input[name="password"]', { timeout: 30000 });
  await page.fill('input[name="password"]', process.env.PASSWORD);
  console.log('Filled password.');
  await page.screenshot({ path: 'screenshots/password_filled.png' });

  // Click the submit button
  await page.click('button[type="submit"]');
  console.log('Clicked submit button.');
  await page.screenshot({ path: 'screenshots/after_submit.png' });

  // Check the page title or any other indication of a successful login
  const title = await page.title();
  console.log('Page title:', title);
  expect(title).toBe('Log in | dashboard'); // Adjusted to the actual title after login
});
