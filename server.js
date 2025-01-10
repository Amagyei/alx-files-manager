// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');

// Import the routes
const routes = require('./routes/index');

// Create the Express app
const app = express();

// Parse JSON requests
app.use(bodyParser.json());

// Load all routes from the file routes/index.js
app.use('/', routes);

// Define the port to listen on
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
