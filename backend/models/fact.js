// Assuming you use something like Mongoose for MongoDB
const mongoose = require('mongoose');

const factSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    source: {
        type: String
    }
    // TODO: Add other relevant fields
});

module.exports = mongoose.model('Fact', factSchema);
