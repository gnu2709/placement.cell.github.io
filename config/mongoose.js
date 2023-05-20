const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://127.0.0.1:27017/placementportal');

const db = mongoose.connection;

db.on('err',console.error.bind(console, "error connection to DB"));

db.once('open',function(){
    console.log("connected to DB MONGO DB of placement page")
})

module.exports = db;