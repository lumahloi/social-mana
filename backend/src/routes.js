const express = require('express')

const UserController = require('./controllers/UserController')
const PostController = require('./controllers/PostController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

routes.get('/posts', PostController.index)
routes.post('/posts', PostController.create)
routes.delete('/posts/:id', PostController.delete)

routes.post('/sessions', SessionController.create)

module.exports = routes;