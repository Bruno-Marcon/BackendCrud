const userService = require('../services/user.service')


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



}

module.exports = {create, findAll}