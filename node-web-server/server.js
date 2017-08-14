 const express = require('express');
// Setting up the express app
 var app = express();

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
   res.send('About page');
 });

 app.get('/bad', (req, res) => {
   res.send({
     errorMessage: 'Unable to handle request.'
   });
 });

 app.listen(3000);
