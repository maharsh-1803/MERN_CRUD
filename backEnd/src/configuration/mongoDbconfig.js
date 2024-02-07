const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_MERN',{})

mongoose.connection.on('connection',()=>{
    console.log('connect to mongoDb');
})

mongoose.connection.on('error',(err)=>{
    console.err(`MongoDB connection error : ${err}`);
})

module.exports= mongoose;