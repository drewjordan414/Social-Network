// housekeeping
const express = require('express');
const mongoose = require('mongoose');
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
app.use('/api/users', routes.userRoutes);
app.use('/api/thoughts', routes.thoughtRoutes);
app.use('/api/thoughts/:thoughtId/reactions', routes.reactionRoutes);
app.use('/api/users/:userId/friends', routes.friendRoutes);

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

// start server
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
