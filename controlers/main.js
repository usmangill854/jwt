
const login = async(req,res) => {
    res.send('fake login')
}

const dashboard = async(req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:'helooo', secret:`authorized :: here is your lucky number${luckyNumber} ` })
}

module.exports ={ login,dashboard};