import dotenv from 'dotenv';
import connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import express from 'express';
import {fileURLToPath} from 'url';


// const express = require('express');
// const dotenv = require('dotenv');
// const connection = require('./database/db');
// const Routes = require('./routes/route.js');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');



const app = express();

dotenv.config();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

//try from net

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//to serve the frontend
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

connection(username, password);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}` ));