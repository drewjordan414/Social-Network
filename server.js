// housekeeping
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/usersRoutes');
const thoughtRoutes = require('./routes/thoughtsRoutes');
const reactionRoutes = require('./routes/reactionsRoutes');
const friendRoutes = require('./routes/friendsRoutes');

// express app
const app = express();
const PORT = process.env.PORT || 3001;

// connect to MongoDB
mongoose();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/thoughts/:thoughtId/reactions', reactionRoutes);
app.use('/api/users/:userId/friends', friendRoutes);

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

// start server
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
