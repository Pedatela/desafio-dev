const Sequelize, { Model } = require('sequelize')

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        transaction_type: Sequelize.STRING,
        occurrence_date: Sequelize.DATE,
        value: Sequelize.INTEGER,
        cpf: Sequelize.STRING,
        card: Sequelize.STRING,
        store_owner: Sequelize.STRING,
        store_name: Sequelize.STRING
      },
      {
        sequelize,
      }
    )
    return this
  }
}

module.exports = File;