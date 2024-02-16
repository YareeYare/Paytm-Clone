const mongoose = require('mongoose')

const connectDB = async () => {
      try {
            await mongoose.connect("mongodb+srv://mehulshk:mehul501@kalaster.a7vrsl3.mongodb.net/paytm")
            console.log("DB connected")
      } catch( err ){
            console.log( err )
      }
}

const userSchema = new mongoose.Schema({
      username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 3,
            maxLength: 30
      },
      password: {
            type: String,
            required: true,
            minLength: 6
      },
      firstName: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50
      },
      lastName: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50
      }
})

const User = mongoose.model( 'User', userSchema )

module.exports = { User, connectDB }