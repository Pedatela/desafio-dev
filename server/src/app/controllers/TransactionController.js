const fs = require('fs');
const FileModel = require('../models/Transaction')
const Dictionary = require('../helpers/Dictionary')
class FileController {
  
  async index(req, res) {
    return res.json({msg: "TESTE"})
  }

  async store(req, res) {

      let datas = fs.readFileSync(req.file.path, 'utf8') 
      const lines = datas.split(/\r?\n/);
      lines.forEach(async line => {
          if(line){
            let parsedObject = Dictionary.parse(line)
            try {
              await FileModel.create(parsedObject)
            } catch (error) {
              console.log(error)
            }
          }
      });   
       
    return res.json({msg: "Dados Inseridos com Sucesso"})
  }
}

module.exports =  new FileController()