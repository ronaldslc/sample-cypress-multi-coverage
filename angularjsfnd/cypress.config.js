const { defineConfig } = require('cypress');

module.exports = defineConfig({
  startCommand: 'yarn start:coverage',
  e2e: {
    setupNodeEvents(on, config) {
      return require('../cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e/angularjsfnd/**/*',
  },
})
