// app.js
const express = require('express');
const app = express();
let GPIOList = [];

// Middleware for parsing JSON bodies
app.use(express.json());

// Define a GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


//GPIOdata List contains:
// 0: Gear:str
// 1: speed:int
// 2: RPM:int
// 3: BlinkLeft:Boolean
// 4: BlinkRight:Boolean
// 5: LongLight:Boolean
// 6: CheckEngine:Boolean
// 7: CheckOil:Boolean
// 8: statusText:str
// 9: Clock:str
// 10: NightPanel:Boolean
// 11: CheckFuel:Boolean
// 12: WaterTemp:str


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
