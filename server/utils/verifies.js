import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = ( req, res, next ) => {
    //get token from cookies
    const token = req.cookies.access_token;
    if(!token) {
        return next(createError(401, 'You are not authenticated!'))
    }
    // verify token
    jwt.verify(token, process.env.JWTSECRET, (err, userInfo) => {
        if(err) {
            return next(createError(403, 'Not a valid token!'))
        }
        req.user = userInfo;// in req obj add the userInfo(id & isAdmin)
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        // check that the user is the same who is loggedIn
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, 'You are not authorized!'));
        }
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        // check that the user is admin or not
        if(req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, 'You are not authorized!'))
        }
    })
}