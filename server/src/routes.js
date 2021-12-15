const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');



const TransactionController = require('./app/controllers/TransactionController')


const routes = new Router();
const upload = multer(multerConfig)

routes.get('/transactions', TransactionController.index)
routes.post('/transactions', upload.single('file'), TransactionController.store)
routes.get('/transaction/:store_name', TransactionController.show)


module.exports = routes