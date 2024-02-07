const express = require('expre')
const userController = require('../controllers/userController')
const router = express.Router();

router.post('/',userController.createUser())