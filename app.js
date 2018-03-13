;const express = require('express');
const exphbs = require('express-handlebars');
const path =  require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// App
const app = express();

// Setup engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Map global promise = get rid of waring
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect('mongodb://localhost/bug-note-tracker', {
    useMongoClient: true
})
.then(()=> console.log('MongoDB Connected!'))
.catch(err => console.log(err));




// ROUTES

// Index Route
app.get('/', (req, res)=>{
    res.render('index');
});

// AddBug Route
app.get('/addbug', (req, res)=>{
    res.render('addbug');
})

// Addbug Post Route
app.post('/addbug', (req, res)=>{
    console.log(req.body);
    res.send('Posted');
});


// Static folder middleware
app.use(express.static(path.join(__dirname, 'public')));

//Port and Server
const port = 3000
app.listen(port, ()=> {
    console.log('Server up and running');
})