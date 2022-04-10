const path = require("path");
const rootDir = require.main.filename;

// console.log(path.join(rootDir, "..", "routes", "/*.js"));

const routesPath = path.join(rootDir, "..", "routes", "/*.js");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GIPP",
      version: "1.0.0",
      description: "Go Group Internal Portal Project",
      termsOfSevice: "http://example.com/terms",
      contact: {
        name: "API support",
        url: "http://www.example.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "My API documentation",
      },
    ],
  },
  apis: [routesPath],
};

export default options;
