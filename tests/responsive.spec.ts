import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['Pixel 5'] });

test.describe('Mobile Responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show mobile menu and navigate', async ({ page }) => {
    const menuButton = page.getByLabel('Open navigation menu');
    await expect(menuButton).toBeVisible();

    await menuButton.click();

    const mobileMenu = page.getByRole('navigation', {
      name: 'Mobile navigation',
    });
    await expect(mobileMenu).toBeVisible();

    const experienceLink = mobileMenu.getByText('Experience');
    await experienceLink.click();

    await expect(page).toHaveURL(/#experience/);
    await expect(mobileMenu).not.toBeVisible();
  });
});
