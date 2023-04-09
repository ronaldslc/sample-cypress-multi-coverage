const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  startCommand: 'yarn start',
  e2e: {
    setupNodeEvents(on, config) {
      return require('../plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/reactfnd/**/*',
    env: {
      codeCoverage: {
        exclude: ['cypress/**/*.*']
      }
    }
  },
})
