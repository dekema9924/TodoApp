const express = require('express')
const todoRouter = express.Router()
const todoDashboard = require('../../Controllers/TodoControllers/todoDashboard')
const VerifyToken = require('../../Middleware/authMiddleware')
const Addtodo = require('../../Controllers/TodoControllers/addTodo')
const ShowTodo = require('../../Controllers/TodoControllers/showTodo')


//dashboard 
todoRouter.use(VerifyToken())

todoRouter.get('/' , VerifyToken, todoDashboard)
todoRouter.post('/addtodo', VerifyToken, Addtodo )
todoRouter.get('/showtodo', VerifyToken, ShowTodo )
todoRouter.get('/delete', )



module.exports = todoRouter