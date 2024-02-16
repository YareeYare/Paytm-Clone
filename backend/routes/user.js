const express = require('express')
const { User } = require('../db')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')
const authMiddleware = require('../middleware')

const router = express.Router()


const signupSchema = zod.object({
      username: zod.string().email(),
      firstName: zod.string(),
      lastName: zod.string(),
      password: zod.string().min(6)
})

router.post('/signup', async (req,res) => {
      // const body = req.body
      const {success} = signupSchema.safeParse(req.body)

      if( !success ) {
            return res.status(411).json({ message : "Incorrect Inputs" })
      }

      const existingUser = User.findOne( {username: req.body.username} )

      if( existingUser ){
            return res.status(411).json({ message : "Email already taken" })
      }

      const hashed_pwd = bcrypt.hash( req.body.password, 10 ) // 10 salt rounds

      const user = await User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashed_pwd,
      })

      const TOKEN = jwt.sign({
            userId: user._id
      }, JWT_SECRET)

      res.status(200).json({
            message: "User created successfully",
	      token: TOKEN
      })

})


const signinSchema = zod.object({
      username: zod.string().email(),
      password: zod.string()
})

router.post('/signin', async (req,res) => {

      const {success} = signinSchema.safeParse(req.body)

      if( !success ) {
            return res.status(411).json({ message : "Incorrect Inputs" })
      }

      const { username, password } = req.body

      const user = User.findOne({ username })

      if( !user ){ return res.status(411).json({ message : "Error while logging in" }) }

      const pwd_match = await bcrypt.compare( password, user.password )

      if( !pwd_match ){ return res.status(411).json({ message : "Error while logging in" }) }

      const TOKEN = jwt.sign({
            userId: user._id
      }, JWT_SECRET)

      res.status(200).json({ token: TOKEN })

})


const updateSchema = zod.object({
      password: zod.string().optional(),
      firstName: zod.string().optional(),
      lastName: zod.string().optional()
})

router.put('/', authMiddleware, async(req,res) => {
      const { success } = updateSchema.safeParse( req.body )
      if( !success ){
            res.status(411).json({ message: "Error while updating information" })
      }

      await User.updateOne({ _id: req.userId }, req.body)

      res.status(200).json("Updated successfully")

})

router.get('/bulk', async(req,res) => {
      const filter = req.query.filter || ""

      const users = await User.find({
            $or: [{
                  firstName: {
                        "$regex": filter
                  }
            }, {
                  lastName: {
                        "$regex": filter
                  }
            }]
      })

      res.json({
            user: users.map( user => ({
                  username: user.username,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  _id: user._id
            }))
      })
})

module.exports = router