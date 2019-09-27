const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/AutopartsDB');
mongoose.connection.once('open', () => {
  console.log('connection successful');
}).on('error', (error) => {
  console.log('connection error');
})

app.use(bodyParser.json());

app.use((req,res,next) => {
  console.log('First middleware');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Request-With, Content-Type, Access");
res.setHeader("Access-Control-Allow-Methods",
   "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use('/api/user',(req,res) => {
  res.send('Hello from express!');
});

module.exports = app;
