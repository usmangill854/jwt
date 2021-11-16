const CustomAPIError = require('./customError')
const{StatusCodes} = require('http-status-code')

class UnauthencatedError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
module.exports = UnauthencatedError