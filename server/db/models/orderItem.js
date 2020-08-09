const Sequelize = require('sequelize')
const db = require('../db')
const Item = require('./item')
const Order = require('./order')

const OrderItem = db.define('orderItem', {
  price: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      not: ['[a-z]', 'i'],
      notEmpty: true,
      max: 10000,
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      not: ['[a-z]', 'i'],
      min: 0,
      max: 1000
    }
  }
})

OrderItem.prototype.addOne = function() {
  return this.quantity++
}

OrderItem.prototype.getPrice = async function() {
  const item = await Item.findByPk(this.itemId)
  return item.price
}

OrderItem.checkOrder = async function(orderId) {
  const order = await OrderItem.findOne({
    where: {orderId}
  })
  if (order) return true
  return false
}

//check item is within order, add itemId, orderId
OrderItem.checkItem = async function(itemId) {
  const item = await OrderItem.findByPk(itemId)
  if (item) return true
  return false
}

OrderItem.addItem = async function(orderId, itemId) {
  try {
    let updateCart
    if (OrderItem.checkOrder(orderId)) {
      if (OrderItem.checkItem(itemId)) {
        updateCart = await OrderItem.update(
          {
            quantity: 4
          },
          {
            where: {
              itemId: itemId,
              orderId: orderId
            }
          }
        )
      } else {
        updateCart = await OrderItem.create({
          price: this.getPrice(),
          quantity: 1,
          orderId: orderId,
          itemId: itemId
        })
      }
    }
    return updateCart
  } catch (error) {
    console.error(error)
  }
}

OrderItem.removeItem = async (orderId, itemId) => {
  const itemToRemove = await OrderItem.findOne({
    where: {
      orderId,
      itemId
    }
  })
  await itemToRemove.decrement('quantity', {by: 1})
  if (itemToRemove.quantity === 0) {
    await OrderItem.destroy({
      where: {
        orderId,
        itemId
      }
    })
  }
}

module.exports = OrderItem
