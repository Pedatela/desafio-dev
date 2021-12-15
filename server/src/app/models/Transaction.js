const { Sequelize, Model } = require('sequelize')
class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        transaction_type: Sequelize.STRING,
        occurrence_date: Sequelize.DATE,
        value: Sequelize.DOUBLE,
        cpf: Sequelize.STRING,
        card: Sequelize.STRING,
        store_owner: Sequelize.STRING,
        store_name: Sequelize.STRING
      },
      {
        sequelize,
      }
    )
    this.addHook('beforeSave', async (transaction) => {
        if(transaction.value){
            transaction.value = parseInt(transaction.value) / 100
        }
      })
    return this
  }
}

module.exports = Transaction;