const mongoose = require('mongoose');
/* Task Schema */
const Apod = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    explanation: {
        type: String
    },
    media_type: {
        type: String
    },
    url: {
        type: String
    },
    date: {
        type: Date
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('apod', Apod);