const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    title: {
        type: String,
        requried: true
    }, 
    importance: {
        type: String,
        required: true
    }, 
    status: {
        type: String, 
        required: true
    },
    bugnumber: {
        type: String
    },
    query: {
        type: String
    },
    description:{
        type: String
    },
    date:{
        type: Date, 
        default: Date.now
    }
});


// Create the model, based on the schema
mongoose.model('items', ItemSchema);