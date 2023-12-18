

// Import the express function
const express = require('express')
const app = express()

// Define middleware for all routes
app.use((request, response, next) => {
    console.log(request)
    next()
})

// Define route for GET request on path '/'
//app.get('/', (request, response) => {
//response.send('response for GET request');
//});

app.get('/', async (request, response) => {
    const query = await allItems();
    return response.status(201).json(query);
});

// Start the server on port 3000
app.listen(
    3000,
    () => console.log(`Server listening on port 3000.`));