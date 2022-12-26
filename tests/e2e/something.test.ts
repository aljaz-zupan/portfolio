import { expect, test } from '@playwright/test';

test('index page has expected <p>', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('p')).toBe('Visit kit.svelte.dev to read the documentation');
});
