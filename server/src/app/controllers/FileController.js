const fs = require('fs');
const Dictionary = require('../helpers/Dictionary')
class FileController {

  async index(req, res) {
    return res.json({msg: "TESTE"})
  }

  async store(req, res) {
    let datas = fs.readFileSync(req.file.path, 'utf8') 
    const lines = datas.split(/\r?\n/);
    lines.forEach(line => {
        if(line){
            let a = Dictionary.parse(line)
            
        }
    });
       
    return res.json({msg: "TESTE"})
  }
}

module.exports =  new FileController()