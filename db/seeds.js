require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('./models/User.js')

const josh = new User({name: 'Brocier', description: 'Account name'})
const beth = new User({name: 'SasquatchSocks', description: 'My Hero'})

User
  .remove({})
  .then(() => beth.save())
  .then(() => josh.save())
  .then(() => console.log('Successful Save!!!'))
  .then(() => mongoose.connection.close())