import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
});

test('login unlocks the app', async ({ page }) => {
  await page.fill('#pinInput', '0214');
  await page.click('#loginBtn');
  await expect(page.locator('#appContent')).toBeVisible();
});

test('card session shows answer controls after selecting a choice', async ({
  page
}) => {
  await page.fill('#pinInput', '0214');
  await page.click('#loginBtn');

  await page.locator('#cardChoices li').first().click();
  await expect(page.locator('#answerButtons')).toBeVisible();
});

test('stats panel opens and displays accuracy', async ({ page }) => {
  await page.fill('#pinInput', '0214');
  await page.click('#loginBtn');

  await page.click('#statsBtn');
  await expect(page.locator('#statsDashboard')).toHaveClass(/active/);
  await expect(page.locator('#sessionAccuracy')).toContainText('%');
});

test('settings actions: dark mode and reset confirmation', async ({ page }) => {
  await page.fill('#pinInput', '0214');
  await page.click('#loginBtn');

  await page.click('#darkModeBtn');
  await expect(page.locator('body')).toHaveClass(/dark-mode/);

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Reset all progress');
    await dialog.dismiss();
  });

  await page.click('#statsBtn');
  await page.getByRole('button', { name: '🗑️ Reset' }).click();
});
