import {Schema,model,Document} from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document{
    username:string;
    email:string;
    password:string;
    encryptPassword(password:string):Promise<string>;
    validPassword(password:string):Promise<boolean>;
}
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        min:4,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password:{
        type:String,
        required:true,
    }
});
userSchema.methods.encryptPassword=async (password:string):Promise<string>=>{
    const salt=await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
}
userSchema.methods.validPassword=async function (password:string):Promise<boolean>{
    return await bcrypt.compare(password, this.password);
}
export default model<IUser>('UsPer',userSchema);