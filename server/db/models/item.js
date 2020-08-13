const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  year: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [['2018', '2019', '2020']]
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
    validate: {
      isUrl: true
    }
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      not: ['[a-z]', 'i'],
      notEmpty: true,
      max: 1000,
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      max: 100,
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Item
