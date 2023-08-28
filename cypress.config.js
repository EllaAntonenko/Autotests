const { defineConfig } = require("cypress");

module.exports = {
  projectId: "ogefr7",
  // The rest of the Cypress config options go here...
} 

module.exports = defineConfig({
  projectId: 'ogefr7',
  
  e2e: {
    setupNodeEvents(on, config) {
  
      // implement node event listeners here
    },
  },
  
});
