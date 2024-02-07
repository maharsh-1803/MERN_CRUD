const mongoose = require('../configuration/mongoDbconfig');

const userScehma  = new mongoose.Schema({
    name:String,
    email:String,
    phone:String
})

const user = mongoose.model('User',userScehma);