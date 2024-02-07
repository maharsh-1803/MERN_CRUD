const userServices = require('../services/userServices')

class userController{
    async createUser(req,res)
    {
        try {
            const {name,email,phone} = req.body;
            const saveUser = await userServices.createUser(name,email.phone)
            res.json(saveUser);
        } catch (error) {
            res.status(500).json({message:"something went wrong "})
        }
    }
}