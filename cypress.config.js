const { defineConfig } = require("cypress");

module.exports = defineConfig({
	viewportWidth: 1300,
	viewportHeight: 800,
	video: true,
	chromeWebSecurity: false,

	reporter: "cypress-mochawesome-reporter",
	reporterOptions: {
		reportDir: "cypress/reports/",
		overwrite: true,
		html: true,
		json: false,
		timestamp: "dd-mm-yyyy_HH-MM-ss",
	},

	e2e: {
		baseUrl: "http://www.automationpractice.pl/index.php",
		defaultCommandTimeout: 9000,
		experimentalRunAllSpecs: true,
		hideXHRInCommandLog: true,
		specPattern: "cypress/e2e/**/*.cy.js",
		setupNodeEvents(on, config) {
			require("cypress-mochawesome-reporter/plugin")(on);
			return config;
		},
	}
});
