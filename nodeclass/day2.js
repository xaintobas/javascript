const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const route = require('./routes/register');

// Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', route);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, ()=> {
  console.log('Hello World Node.Js');
});

