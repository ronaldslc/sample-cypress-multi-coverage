const { defineConfig } = require('cypress');

module.exports = defineConfig({
  startCommand: 'yarn start:coverage',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e/angularjsfnd/**/*',
  },
})
