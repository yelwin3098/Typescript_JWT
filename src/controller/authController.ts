import {Request,Response} from 'express';
import User,{IUser} from '../models/User';
import jwt from 'jsonwebtoken';
export const signup = async (req:Request ,res:Response) => {
    const user:IUser=new User({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    user.password=await user.encryptPassword(user.password);
    const savedUser=await user.save();
    const token:string=jwt.sign({_id:savedUser._id},process.env.TOKEN_SECRECT || 'tokentest')
    res.header('auth-token',token).json(savedUser);
};
export const signin = async (req:Request ,res:Response) => {
    const user=await User.findOne({email:req.body.email});
    if(!user) return res.status(400).json('Email or password is wrong');

    const correcrPassword:boolean=await user.validPassword(req.body.password);
    if(!correcrPassword) return res.status(400).json('Inavlid Password');
    const token:string=jwt.sign({_id:user._id},process.env.TOKEN_SECRECT || 'tokentest',{
        expiresIn:60 * 60 *24
    })
    res.header('token',token).json(user);
};
export const profile =async (req:Request ,res:Response) => {
    const user= await User.findById(req.userId,{password:0});
    if(!user) return res.status(400).json('No User Found')
    res.send({
        user:user
    })
};