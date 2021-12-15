const fs = require('fs');
const moment = require('moment')
const Transaction = require('../models/Transaction')
const Dictionary = require('../helpers/Dictionary')

class FileController {
  
  async index(req, res) {
    const allTransaction = JSON.parse(JSON.stringify(await Transaction.findAll({attributes: ['id', 'store_owner', 'store_name']})))
    const uniqueStore = Array.from(new Set(allTransaction.map(a => a.store_name)))
    .map(store_name => {
      return allTransaction.find(a => a.store_name === store_name)
    })
    return res.json({data: uniqueStore})
  }

  async show(req, res){
    const store_name = req.params.store_name
    let allTransactionByStoreName = JSON.parse(JSON.stringify(await Transaction.findAll({where: {store_name}})))
    allTransactionByStoreName = allTransactionByStoreName.map(trans=> Dictionary.returnTransactionDescription(trans))
    res.json({data: allTransactionByStoreName})
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