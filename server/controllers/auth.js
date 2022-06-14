import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"; //Use jwt to auth the user for isAdmin

export const signup = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);            
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })

        await newUser.save()
        res.status(201).send("Successfully created new user!")
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if(!user) {
            return next(createError(404, "User does not exist"))
        }
       // Compare the requested password with the hashed password in the db 
       const correctPassword = await bcrypt.compare(req.body.password, user.password);
       if(!correctPassword) {
        return next(createError(400, "Wrong credentials!")) 
       }
       const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWTSECRET );
       const { password, isAdmin, ...restDetails} = user._doc // our user is inside _doc obj 
       res.cookie("access_token", token, {
         httpOnly: true // doesn't allow client secret to reach the cookie
       }).status(200).json({...restDetails}) // will use token as cookie

    } catch (err) {
        next(err);
    }
}