// Import required modules
const express = require('express');
const routes = require('./routes/index');

// Create an Express app
const app = express();

// Define the port
const port = process.env.PORT || 5000;

// Load all routes from 'routes/index.js'
routes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
