const jwt = require('jsonwebtoken')

const verifyJWT = (request, response, next) => {
    const token = request.headers['x-access-token']?.split(' ')[1]
    console.log('Hello')
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) return response.json({
                isLoggedIn: false,
                message: 'Failed to authenticate'
            })
            request.user = {}
            request.user.id = decoded.id
            request.user.username = decoded.username
            next()
        })
    }
    else {
        response.json({
            message: 'Incorrect token given',
            isLoggedIn: false
        })
    }
}

module.exports = verifyJWT