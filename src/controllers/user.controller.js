const userService = require('../services/user.service')
const mongoose = require('mongoose')

const create =  async (req,res) =>{
    const {name,username,email,password,avatar} = req.body

    if(!name || !username || !email || !password|| !avatar){
        res.status(400).send({message: "submit all fields for registration"})
    }

    const user =  await userService.createService(req.body)

    if(!user){
        return res.status(400).send({message: "Error creating user"})
    }


    res.status(201).send({
        messagem: "User created successfully",
        user:{
            id: user._id,
            name,
            username,
            email,
            avatar,
        },
    })
}


const findAll = async(req, res) =>{
    const users = await userService.findAllService()

    if(users.length === 0){
        return res.status(400).send({message: "There're no registered users "})
    }

    res.send(users)
}

const findById = async(req, res) =>{

    const id = req.params.id

    if(! mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "invalid ID"})
    }

    const user = await userService.findByIdService(id)

    if(!user){
        return res.status(400).send({message: "User not found"})
    }
    res.send(user)
}
module.exports = {create, findAll, findById}