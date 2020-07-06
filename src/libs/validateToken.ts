import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { token } from 'morgan';

interface IPayload{
    _id:string;
    iat:number;
    exp:number;
}

export const TokenValidateion=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.header('auth-token');
    if(!token) return res.status(401).json('Access Denied');

    const payload=jwt.verify(token,process.env.TOKEN_SECRECT || 'tokentest') as IPayload;
    req.userId=payload._id;
    next();
}