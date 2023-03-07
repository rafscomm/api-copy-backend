import { compare, genSalt, hash } from "bcryptjs"

const SALT = 8;

const hashPassword = async (password:string) =>{
    const saltGen = await genSalt(SALT)
    return  await hash(password, saltGen)
}

const verifyPassword = async (password:string, hashed: string) =>{
   return await compare(password,hashed)
}


export const PasswordCrypto = {
    hashPassword,
    verifyPassword
}