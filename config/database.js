const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} Mongo database at ${db.port}`);
});