const {CustomAPIError} = require('../errors')
const errorHandlerMiddleware = async(err,req,res,next) => {
    if(err instanceof CustomAPIError)
    return res.status(err.statusCode).json({msg:err.message})
    
    return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('something went wrong')
}
module.exports = errorHandlerMiddleware 