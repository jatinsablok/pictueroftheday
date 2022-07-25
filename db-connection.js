const mongoose = require('mongoose');

// connect to the database [I used mongodb cloud so you can test my assignment.]
mongoose.connect('mongodb+srv://jatin:sablok@cluster0.cecblzx.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

// printing error if connection fails.
db.on('error', console.error.bind(console, "Error in connecting to eleve Database."));

// printing success message if connection is successful.
db.once('open', function(){
    console.log('Connected to eleve Database.');
});

module.exports = db;