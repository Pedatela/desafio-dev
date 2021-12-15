const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');



const TransactionController = require('./app/controllers/TransactionController')


const routes = new Router();
const upload = multer(multerConfig)

routes.get('/files', TransactionController.index)


routes.post('/files', upload.single('file'), TransactionController.store)

module.exports = routes