const mongoose = require('mongoose');
const dbName = 'recipe-app';

// connect to the 
mongoose.connect(`mongodb://localhost/${dbName}`, { useMongoClient: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`);
});
