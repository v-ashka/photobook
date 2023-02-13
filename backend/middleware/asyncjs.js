const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret123';
const asyncAuthWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies['jwt'];
            const verifyToken = jwt.verify(token, JWT_SECRET)
            if (verifyToken) {
                console.log(verifyToken.email)
                await fn(req, res, next, token);
            } else {
                next('Error');
            }
           
        } catch (error) {
            next(`Not authorized: ${error}`)
        }
    }
}

module.exports = {asyncWrapper, asyncAuthWrapper}