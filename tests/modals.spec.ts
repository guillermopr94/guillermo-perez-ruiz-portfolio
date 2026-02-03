import { test, expect } from '@playwright/test';

test.describe('Modals', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open and close CV Preview modal', async ({ page }) => {
    const openButton = page.getByLabel('Open resume preview modal').first();
    await openButton.click();

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();
    await expect(modal).toContainText(/Guillermo Pérez Ruiz/i);

    const closeButton = page.getByLabel('Close resume modal');
    await closeButton.click();

    await expect(modal).not.toBeVisible();
  });
});
