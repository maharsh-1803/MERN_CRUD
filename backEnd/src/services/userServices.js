const user = require('../models/user');

class userServices{
    async createUser(name,email,phone)
    {
        const newUser =  new User({name,email,phone});
        return await newUser.save();
    }
}

module.exports = new userServices();