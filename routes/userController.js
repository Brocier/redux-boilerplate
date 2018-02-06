// an example of the express router used to achieve the API calls in the actions
// folder

const express = require('express')
const User = require('../db/models/User')
const router = express.Router({mergeParams: true})

router.get('/', async(req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.post('/', async(req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
    console.log(newUser)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.delete('/:userId', async(req, res) => {
  try {
    await User.findByIdAndRemove(req.params.userId)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.patch('/:userId', async(req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    res.json(updatedUser)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router