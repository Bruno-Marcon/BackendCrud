import User from '../models/User.js'
import Jwt from 'jsonwebtoken'

const loginService = (email) => User.findOne({email: email}).select("+password")

const generateToken = (id) => Jwt.sign({id: id},process.env.SECRET_JWT, {expiresIn:3600})

export {loginService,generateToken}