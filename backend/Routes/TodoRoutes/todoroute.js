const express = require('express')
const todoRouter = express.Router()
const todoDashboard = require('../../Controllers/TodoControllers/todoDashboard')
const VerifyToken = require('../../Middleware/authMiddleware')
const Addtodo = require('../../Controllers/TodoControllers/addTodo')
const ShowTodo = require('../../Controllers/TodoControllers/showTodo')
const UpdateTodo = require('../../Controllers/TodoControllers/Update')
const DeleteTodo = require('../../Controllers/TodoControllers/DeleteTodo')
//dashboard 

todoRouter.get('/' , VerifyToken, todoDashboard)
todoRouter.post('/addtodo', VerifyToken, Addtodo )
todoRouter.get('/showtodo', VerifyToken, ShowTodo )
todoRouter.delete('/delete/:id', VerifyToken, DeleteTodo)
todoRouter.patch('/update/:id', VerifyToken, UpdateTodo)




module.exports = todoRouter