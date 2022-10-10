const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        chromeWebSecurity: false,
        viewportWidth: 1024,
        viewportHeight: 768,
        reporter: "mochawesome",
        defaultCommandTimeout: 10000,
        projectId: "egwr4r",
    setupNodeEvents(on, config) {
      // implement node event listeners here
        },
  },
});
