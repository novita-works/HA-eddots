const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://edot.id',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000, // set timeout for command 10 sec
    pageLoadTimeout: 10000, // set timeout for loading page 10 sec
    requestTimeout: 10000, // set timeout for HTTP request 10 sec
    responseTimeout: 10000, // set timeout for HTTP response 10 sec
    screenshotOnRunFailure: false, // non-activate automation screenshoot when failed
    retries: {
      runMode: 2, // set retest until 2x when fail in run mode
      openMode: 1 // set retest 1x when fail in open mode
    },
    chromeWebSecurity: false // non-activate web chronme security
  },
});
