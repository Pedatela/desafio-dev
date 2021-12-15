const { Sequelize, Model } = require('sequelize')
const moment = require('moment')
class Transaction extends Model {
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
    this.addHook('beforeSave', async (transaction) => {
        // console.log(transaction)
        // if(transaction.value){
        //     transaction.value = parseInt(transaction.value) / 100
        // }
        // transaction.occurrence_date = moment(`${transaction.occurrence_date} ${transaction.hour}`, 'YYYYMMDD HHmmss')
      })
    return this
  }
}

module.exports = Transaction;