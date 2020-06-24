const express = require("express");
const path = require('path')
const stripe = require("stripe")("INSERT YOUR STRIPE KEY HERE");
const pug = require("pug");
const bodyParser = require("body-parser");

var app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));

app.get('/', function(req,res){
  res.render('index', {

  });
});

app.get('/index', function(req,res){
  res.render('index', {

  });
});

app.get('/pricing', function(req,res){
  res.render('pricing', {

  });
});

app.get('/paymentvalid', function(req,res){
  res.render('paymentvalid', {

  });
});

app.post('/charge', function(req,res){

});


app.listen(3000, function(){
  console.log("This is running.");
});
