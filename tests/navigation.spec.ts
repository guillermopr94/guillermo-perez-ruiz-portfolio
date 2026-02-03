import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Guillermo Pérez Ruiz/i);
  });

  test('should navigate to sections via navbar', async ({ page, isMobile }) => {
    const navLinks = [
      { name: 'Experience', href: '#experience' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ];

    for (const link of navLinks) {
      if (isMobile) {
        const menuButton = page.getByLabel('Open navigation menu');
        // Only click if it's visible (it might be open already or we are in a state where it's needed)
        if (await menuButton.isVisible()) {
          await menuButton.click();
          // Wait for menu to be visible
          await expect(
            page.getByRole('navigation', { name: 'Mobile navigation' }),
          ).toBeVisible();
        }
      }

      const navItem = page.locator(`nav >> text=${link.name}`).first();
      await navItem.click();
      await expect(page).toHaveURL(new RegExp(link.href));

      // Verify section is in view (approximate)
      const section = page.locator(link.href);
      await expect(section).toBeVisible();
    }
  });

  test('should scroll to top when logo is clicked', async ({ page }) => {
    // Scroll down first to the bottom
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Ensure we actually scrolled
    await expect(async () => {
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeGreaterThan(0);
    }).toPass();

    // Click logo/brand
    await page.getByLabel('Scroll to top').click();

    // Wait for smooth scroll to finish with a retry logic
    await expect(async () => {
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBe(0);
    }).toPass({
      timeout: 5000,
      intervals: [100, 200, 500],
    });
  });
});
