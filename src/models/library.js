const mongoose = require('mongoose');
const { Schema } = mongoose;

const Location = new Schema({
    name: String,
    place: String
});

const Library = new Schema({
    title: String,
    PlaceInfo: [Location],
    publishedDate: Date,
    price: Number,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', Book);

