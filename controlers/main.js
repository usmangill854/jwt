const jwt = require('jsonwebtoken')

const {BadRequest} = require('../errors')

const login = async(req,res) => {
    const{username,password}=req.body
    if(!username || !password){
    throw new BadRequest('please provide email and password')
    }
    const id = new Date().getDate

    const token = jwt.sign({
    username,id
    },process.env.JWT_SECRET,
    {expiresIn:'30d'})

     res.status(200).json({msg:'user created',token})
}

const dashboard = async(req,res)=>{
    // console.log(req.headers);
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer '))
    throw new CustomAPIError('No token provided',401)


    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const luckyNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg: `helooo ${decoded.username} ` , secret:`authorized :: here is your lucky number${luckyNumber} ` })


        console.log(decoded)} catch (error) {
        throw new CustomAPIError('Not authorizes',401)

    }


    // console.log(token)
   
}

module.exports ={ login,dashboard};