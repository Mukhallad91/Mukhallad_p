// tests/api/example.api.test.js
const { test, expect } = require('@playwright/test');
const axios = require('axios');

test.describe('API Tests', () => {
  test('should return a post with id 1', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });
});
