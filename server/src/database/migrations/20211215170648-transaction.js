'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      transaction_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      occurrence_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      card: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      store_owner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      store_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }
  );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transaction');
  }
};
