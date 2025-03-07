const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    baseUrl: "https://automationteststore.com",
    baseURL: "https://dummyjson.com",
    // screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {},
  },
  env: {
    automation_store: "https://automationteststore.com",
  },
  chromeWebSecurity: false,
});
