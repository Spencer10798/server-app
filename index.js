const express = require('express')
let mongoose = require('mongoose')

const app = express();
const port = 3006;

let mongoDB = 'mongodb://localhost:27017/InstagramCloneDB';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});