const fs = require('fs');
const moment = require('moment')
const Transaction = require('../models/Transaction')
const Dictionary = require('../helpers/Dictionary')
class FileController {
  
  async index(req, res) {
    const allTransaction = await Transaction.findAll()
    return res.json({data: allTransaction})
  }

  async show(req, res){
    console.log()
  }

  async store(req, res) {
      let datas = fs.readFileSync(req.file.path, 'utf8') 
      const lines = datas.split(/\r?\n/);
      lines.forEach(async line => {
          if(line){
            try {
              let parsedObject = Dictionary.parse(line)
              parsedObject.occurrence_date = moment(`${parsedObject.occurrence_date} ${parsedObject.hour}`, 'YYYYMMDD HHmmss').format()
              await Transaction.create(parsedObject)
            } catch (error) {
              console.log(error)
            }
          }
      });   
       
    return res.json({msg: "Dados Inseridos com Sucesso"})
  }
}

module.exports =  new FileController()