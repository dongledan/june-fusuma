const {Order, User} = require('../db/models')

function isAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.send('Nice try non admin weirdo')
  }
}

async function isUser(req, res, next) {
  const request = req.body
  try {
    const user = await User.findbyPk(request.user.id)
    console.log(req.body)
    if (user) {
      next()
    }
    res.send('not a User')
  } catch (error) {
    next(error)
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
  //confirm this is correct logic!
  if (!Order.findCart(req.user.id)) {
    next()
  }
  res.send('Cart already exists')
}

module.exports = {
  isAdmin,
  isCorrectUser,
  doesCartExist,
  isUser,
  isCorrectUserOrAdmin
}
