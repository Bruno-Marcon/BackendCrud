import bcrypt from 'bcrypt'
import { loginService } from '../services/auth.service.js'

const login = async (req,res) =>{
    
    const {email,password} = req.body

    try{
        const user = await loginService(email)

/*         const passwordIsValid = bcrypt.compare, user.password
 */
        res.send(user)  
    }catch(err){
        res.status(500).send(err.message)
    }
}


export {login}