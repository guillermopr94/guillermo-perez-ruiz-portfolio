import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Guillermo Pérez Ruiz/i);
  });

  test('should navigate to sections via navbar', async ({ page }) => {
    const navLinks = [
      { name: 'Experience', href: '#experience' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ];

    for (const link of navLinks) {
      const navItem = page.locator(`nav >> text=${link.name}`).first();
      await navItem.click();
      await expect(page).toHaveURL(new RegExp(link.href));

      // Verify section is in view (approximate)
      const section = page.locator(link.href);
      await expect(section).toBeVisible();
    }
  });

  test('should scroll to top when logo is clicked', async ({ page }) => {
    // Scroll down first
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.evaluate(() => window.scrollY)).resolves.toBeGreaterThan(
      0,
    );

    // Click logo
    await page.getByLabel('Scroll to top').click();

    // Wait for smooth scroll
    await page.waitForTimeout(1000);
    await expect(page.evaluate(() => window.scrollY)).resolves.toBe(0);
  });
});
