const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://mehulshk:mehul501@kalaster.a7vrsl3.mongodb.net/")

const userSchema = new Schema({

})

const User = mongoose.model( 'User', userSchema )

module.exports = { User }