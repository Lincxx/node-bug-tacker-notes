const express = require('express');
const exphbs = require('express-handlebars');
const path =  require('path');

// App
const app = express();

// Setup engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ROUTES
app.get('/', (req, res)=>{
    res.render('index');
});

// Static folder middleware
app.use(express.static(path.join(__dirname, 'public')));

//Port and Server
const port = 3000
app.listen(port, ()=> {
    console.log('Server up and running');
})