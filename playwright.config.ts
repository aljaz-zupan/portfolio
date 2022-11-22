import  { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	use: {
		baseURL: "http://127.0.0.0:4173"
	},
	projects: [
		{
		  name: 'chromium',
		  use: { ...devices['Desktop Chrome'] },
		},
		{
		  name: 'firefox',
		  use: { ...devices['Desktop Firefox'] },
		},
		{
		  name: 'webkit',
		  use: { ...devices['Desktop Safari'] },
		},
	  ],
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	}
};

export default config;
