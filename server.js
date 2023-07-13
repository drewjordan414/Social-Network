// const express = require('express');
// const mongoose = require('mongoose');
// const db = require('./config/connection');
// const routes = require('./routes');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Connect to MongoDB
// mongoose.connect(db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// app.use((req, res) => {
//   res.status(404).send('<h1>404 Error</h1>');
// });

// mongoose.connection.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB(); // Call the db function to establish the connection

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((req, res) => {
  res.status(404).send('<h1>404 Error</h1>');
});

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

