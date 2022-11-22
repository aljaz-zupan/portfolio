import { expect, test } from '@playwright/test';


test('main page has h1 with name and surname', async ({ page }) => {
	await page.goto('http://127.0.0.1:5173/projects');
	expect(await page.textContent('h1')).toBe('Projects');
});
