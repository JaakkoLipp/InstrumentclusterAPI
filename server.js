// server.js
const app = require('./app'); // Import the Express application
const port = 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
