const {Order, User} = require('../db/models')

function isAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.send(
      'Hey! Nice try non admin weirdo. Please make your way back to the front end :)'
    )
  }
}

function isCorrectUser(req, res, next) {
  let id = parseInt(req.params.id)
  if (req.user && req.user.id === id) {
    next()
  } else {
    res.send(
      'Hey! You are not this user. What are you even doing back here? Please find your way to the front end :)'
    )
  }
  console.log('req.user', req.user.id)
  console.log('params', id)
}

function isCorrectUserOrAdmin(req, res, next) {
  let id = parseInt(req.params.id)
  if (req.user && (req.user.isAdmin || req.user.id === id)) {
    next()
  } else {
    res.send(
      'Hey! You are not this user or an all knowing admin. What are you even doing back here? Please find your way to the front end :)'
    )
  }
}

async function doesCartExist(req, res, next) {
  if (!Order.findCart(req.user.id)) {
    next()
  }
  res.send('Cart already exists')
}

module.exports = {
  isAdmin,
  isCorrectUser,
  doesCartExist,
  isCorrectUserOrAdmin
}
