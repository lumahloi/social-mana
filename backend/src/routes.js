const express = require('express')

const UserController = require('./controllers/UserController')
const PostController = require('./controllers/PostController')
const SessionController = require('./controllers/SessionController')
//const LikeController = require('./controllers/LikeController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)

routes.get('/posts', PostController.index)
routes.post('/posts', PostController.create)
routes.delete('/posts/:id', PostController.delete)

routes.post('/sessions', SessionController.create)

//routes.post('/likes', LikeController.create)

module.exports = routes;