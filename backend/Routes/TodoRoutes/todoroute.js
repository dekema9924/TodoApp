const express = require('express')
const todoRouter = express.Router()
const todoDashboard = require('../../Controllers/TodoControllers/todoDashboard')
const VerifyToken = require('../../Middleware/authMiddleware')



//dashboard 
todoRouter.get('/' , VerifyToken, todoDashboard)




module.exports = todoRouter