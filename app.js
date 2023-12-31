// app.js
const express = require('express');
const app = express();
let GPIOList = [];

// Middleware for parsing JSON bodies
app.use(express.json());

// get index
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a POST route for /gpiodata, data from GPIO hardware
app.post('/gpiodata', (req,res) => {
    // store list
    GPIOList = req.body.GPIOLIST;
    console.log('Received list:', GPIOList);
    // failcheck response
    res.json({ message: 'List received', receivedList: GPIOList });
});

// GPIO to frontend
app.get('/gpiodata', (req, res) => {
    // Send the stored GPIOList
    res.json({ GPIOList: GPIOList });
});

// Export the app for use in other files (like server, test files)
module.exports = app;
