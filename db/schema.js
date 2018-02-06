const {Schema} = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'Adventurer'
  },
  description: {
    type: String,
    required: false,
    default: 'A mighty hero from a distant land'
  }
}, {timestamps: {}})

module.exports = {
  UserSchema
}