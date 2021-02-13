const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class userController {
  static async login(req, res, next) {
    try {
      let { email, password } = req.body
      if (!email || !password) throw { name: 'error_400_no_email_password' }

      const user = await User.findOne({ where: { email } })
      if (!user) throw { name: 'error_400_wrong_email_password' }
      if (!compare(password, user.password))
        throw { name: 'error_400_wrong_email_password' }

      const access_token = generateToken({
        id: user.id,
        email: user.email,
      })
      const response = {
        id: user.id,
        email: user.email,
        access_token,
      }

      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }

  static async register(req, res, next) {
    try {
      let { email, password, name } = req.body
      let input = { email, password, name }

      const user = await User.create(input)
      const access_token = generateToken({
        id: user.id,
        email: user.email,
      })
      const response = {
        id: user.id,
        email: user.email,
        access_token,
      }

      res.status(201).json(response)
    } catch (err) {
      next(err)
    }
  }

  static async googleLogin(req, res, next) {
    const { tokenGoogle } = req.body
    try {
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
      const ticket = await client.verifyIdToken({
        idToken: tokenGoogle,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      const payload = ticket.getPayload()
      const { name, email } = payload
      const password =
        process.env.GENERATED_PASSWORD + Math.floor(Math.random() * 100) + 1

      let user = await User.findOne({ where: { email } })
      if (!user) {
        user = await User.create({
          name,
          email,
          password,
        })
      }

      const access_token = generateToken({
        id: user.id,
        email: user.email,
      })

      const response = {
        id: user.id,
        email: user.email,
        access_token,
      }

      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = userController
