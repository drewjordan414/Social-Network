const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect('mongodb://127.0.0.1:27017/social-network-db', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };
mongoose.connect('mongodb://127.0.0.1:27017/social-network-db');
module.exports = mongoose.connection;
// module.exports = connectDB;
