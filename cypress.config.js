const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://main.d27k9wqkcnjscm.amplifyapp.com/',
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  },
});


