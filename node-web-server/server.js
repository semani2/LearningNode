 const express = require('express');
 const hbs = require('hbs');
// Setting up the express app
 var app = express();
 //Setting up handle bars
 app.set('view engine', 'hbs');

//Setting up a static web page
 app.use(express.static(__dirname + '/public'));

 app.get('/', (req, res) => {
  //  res.send('<h1>Hello Express!!</h1>');
  res.send({
    name: 'Sai Prajnan',
    likes: [
      'Music',
      'Coding'
    ]
  });
 });

 app.get('/about', (req, res) => {
   res.render('about.hbs');
 });

 app.get('/bad', (req, res) => {
   res.send({
     errorMessage: 'Unable to handle request.'
   });
 });

 app.listen(3000, () => {
   console.log('Server is up on port 3000');
 });
