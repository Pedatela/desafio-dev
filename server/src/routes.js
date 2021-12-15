const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');



const FileController = require('./app/controllers/FileController')


const routes = new Router();
const upload = multer(multerConfig)

routes.get('/files', FileController.index)


routes.post('/files', upload.single('file'), FileController.store)

module.exports = routes