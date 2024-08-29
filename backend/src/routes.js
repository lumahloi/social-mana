const express = require('express')

const UserController = require('./controllers/UserController')
const PostController = require('./controllers/PostController')
const SessionController = require('./controllers/SessionController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)

routes.get('/posts', PostController.index)
routes.post('/posts', PostController.create)
routes.delete('/posts/:id', PostController.delete)

routes.post('/sessions', SessionController.create)

routes.post('/likes/:postid', LikeController.create)        //usuario da like. headers: authorization
routes.delete('/likes/:postid', LikeController.delete)      //usuario da unlike. headers: authorization
routes.get('/likes/:postid', LikeController.index)          //retorna se user deu like num post por headers

routes.post('/dislikes/:postid', DislikeController.create)        //usuario da like. headers: authorization
routes.delete('/dislikes/:postid', DislikeController.delete)      //usuario da unlike. headers: authorization
routes.get('/dislikes/:postid', DislikeController.index)          //retorna se user deu like num post por headers

module.exports = routes;