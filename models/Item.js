const mongoose = require('mongoose');
const Schema = mongoose.Schema();

// Create Schema
const ItemSchema = new Schema({
    bugnote:{
        type: String,
        requried: true
    }, 
    bugnumber:{
        type: String
    }, 
    description:{
        type: String
    },
    date:{
        type: Date, 
        default: Date.now
    }
})


// Create the model, based on the schema
mongoose.model('items', ItemSchema);