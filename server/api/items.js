const router = require('express').Router()
const {Item} = require('../db/models')
const {isAdmin} = require('./utils')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.put('/:itemId/edit', async (req, res, next) => {
  const request = req.body
  try {
    const updatedItem = await Item.update(request)
    res.json(updatedItem)
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    res.json(item)
  } catch (error) {
    next(error)
  }
})
router.post('/', isAdmin, async (req, res, next) => {
  const request = req.body
  try {
    const newItem = await Item.create(request)
    res.json(newItem)
  } catch (error) {
    next(error)
  }
})
router.put('/', isAdmin, async (req, res, next) => {
  const request = req.body
  try {
    const updatedItem = await Item.update(request)
    res.json(updatedItem)
  } catch (error) {
    next(error)
  }
})

router.delete('/', isAdmin, async (req, res, next) => {
  const request = req.body
  try {
    const deletedItem = await Item.destroy(request)
    res.json(deletedItem)
  } catch (error) {
    next(error)
  }
})
