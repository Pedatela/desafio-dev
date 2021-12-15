 const Sequelize = require('sequelize');
 const databaseConfig = require('../config/database');
 const Transaction = require('../app/models/Transaction')

const models = [
  Transaction
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();