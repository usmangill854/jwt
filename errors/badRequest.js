const CustomAPIError = require('./customError')
const{StatusCodes} = require('http-status-code')
class BadRequest extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BadRequest
    }
}
module.exports = BadRequest