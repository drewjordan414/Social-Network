// housekeeping
const express = require('express');
const db = require('../config/connection');
const routes = require('./routes');

// express app
const app = express();
const PORT = process.env.PORT || 3001;

// connect to MongoDB
mongoose();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);
// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

// start server
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
