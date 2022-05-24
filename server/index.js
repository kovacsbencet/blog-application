const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')


import eventRoutes from './routes/events.js'

const app = express();

// APP USE

app.use('/events', eventRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// MONGO DB CONNECTION

const CONNECTION_URL = "mongodb+srv://eventapp:eventapp12345@events.lzamo.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>{console.log(`Server running on port: ${PORT}`)})
.catch((error) => console.log(error.message))


