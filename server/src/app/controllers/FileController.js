const fs = require('fs');

class FileController {

  async index(req, res) {
    return res.json({msg: "TESTE"})
  }

  async store(req, res) {
    console.log(req.file)
    fs.readFile(req.file.path, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
    return res.json({msg: "TESTE"})
  }
}

module.exports =  new FileController()