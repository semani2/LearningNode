 const express = require('express');
 const hbs = require('hbs');
 const fs = require('fs');
// Setting up the express app
 var app = express();
 //Setting up handle bars
 hbs.registerPartials(__dirname + '/views/partials');
 app.set('view engine', 'hbs');

// Using a middle ware to intersect requests
//Logger middleware
 app.use((req, res, next) => {
   var now = new Date().toString();
   var log = `${now}: ${req.ip} - ${req.method} ${req.url}`;
   console.log(log);
   fs.appendFile('server.log', log + '\n', (err) => {
     if(err) {
       console.log('Unable to append to server.log file');
     }
   })
   next();
 });

// maintenance middle ware
 // app.use((req, res, next) => {
 //   res.render('maintenance.hbs');
 // });

 //Setting up a static web page - using middleware
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
