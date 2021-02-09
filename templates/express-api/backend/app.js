const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const postroute = require('./routes/postRoute');
app.use(express.json());






mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connexion à mongoDB réussie!'))
.catch(()=>console.log('Connexion à mongoDB échouée!'));


app.use('/posts', postroute);

module.exports = app;