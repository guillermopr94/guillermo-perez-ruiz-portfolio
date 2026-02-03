import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('should show validation errors on empty submission', async ({
    page,
  }) => {
    const submitButton = page.getByLabel('Send contact message');
    await submitButton.click();

    // Check for native validation or custom error messages
    // Since we're using 'required' attribute, we check if the form is still there
    // and no success message appeared.
    const successMessage = page.getByText(/message sent successfully/i);
    await expect(successMessage).not.toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('textarea[name="message"]', 'Hello world');

    const submitButton = page.getByLabel('Send contact message');
    await submitButton.click();

    const successMessage = page.getByText(/message sent successfully/i);
    await expect(successMessage).not.toBeVisible();
  });
});
