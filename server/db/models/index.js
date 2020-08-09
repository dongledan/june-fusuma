const User = require('./user')
const Order = require('./order')
const Item = require('./item')
const OrderItem = require('./orderItem')

Order.belongsToMany(Item, {through: OrderItem})
Item.belongsToMany(Order, {through: OrderItem})
User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
  User,
  Order,
  Item,
  OrderItem
}
