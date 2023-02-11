const create = (req,res) =>{
    const {name,username,email,password,avatar} = req.body

    if(!name || !username || !email || !password|| !avatar){
        res.status(400).send({message: "submit all fields for registration"})
    }

    


    res.status(201).send({
        messagem: "User created successfully",
        user:{
            name,
            username,
            email,
            avatar,
        },
    })
}

module.exports = {create}