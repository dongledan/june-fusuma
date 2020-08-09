const Sequelize = require('sequelize')
const db = require('../db')
const Item = require('./item')

const Order = db.define('order', {
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

// this prototype method finds purchase history for individual users, taking in a userId as a paramater, returning an array of purchase objects
Order.findPurchaseHistory = async function(userId) {
  try {
    const purchase = await this.findAll({
      where: {
        userId,
        isPurchased: true
      }
    })
    return purchase
  } catch (error) {
    console.error(error)
  }
}
// this takes an order and finds the price of all items * their quantity

Order.prototype.findTotalPrice = function() {
  try {
    const itemArr = this.getItems()
    let price = 0
    for (let i = 0; i < itemArr.length; i++) {
      price += parseInt(i[price] * i[quantity])
    }
    return price
  } catch (error) {
    console.error(error)
  }
}

Order.findCart = async function(userId) {
  try {
    const cart = await this.findOne({
      where: {
        userId,
        isPurchased: false
      },
      include: [{model: Item}]
    })
    return cart
  } catch (error) {
    console.error(error)
  }
}

Order.checkout = async function(userId) {
  try {
    await Order.update(
      {isPurchased: true},
      {
        where: {
          userId
        }
      }
    )
  } catch (error) {
    console.error(error)
  }
}

Order.newCart = async function(userId) {
  try {
    await Order.create({
      userId
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = Order
