const router = require('express').Router()
const {Keyboard} = require('../db/models')
module.exports = router

router.get('/:keyboardId', async (req, res, next) => {
  try {
    const keyboard = await Keyboard.findByPk(req.param.keyboardId)
    res.status(200).json(keyboard)
  } catch (error) {
    next(error)
  }
})

router.put('/:keyboardId', async (req, res, next) => {
  try {
    const updatedKeyboard = await Keyboard.update(req.body)
    if (updatedKeyboard) {
      res.status(200).json(updatedKeyboard)
    } else {
      const error = new Error('Failed to PUT /api/robots/:keyboardId')
      error.status = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const keyboards = await Keyboard.findAll()
    //keyboards should hold objects of all the keyboards
    res.status(200).json(keyboards)
  } catch (error) {
    next(error)
  }
})
