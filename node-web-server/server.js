 const express = require('express');
 const hbs = require('hbs');
// Setting up the express app
 var app = express();
 //Setting up handle bars
 hbs.registerPartials(__dirname + '/views/partials');
 app.set('view engine', 'hbs');

//Setting up a static web page
 app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});


 app.get('/', (req, res) => {
  //  res.send('<h1>Hello Express!!</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to Express JS, rendering tutorial.'
  })
 });

 app.get('/about', (req, res) => {
   res.render('about.hbs', {
     pageTitle: 'About Page',
   });
 });

 app.get('/bad', (req, res) => {
   res.send({
     errorMessage: 'Unable to handle request.'
   });
 });

 app.listen(3000, () => {
   console.log('Server is up on port 3000');
 });
