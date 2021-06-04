const jwt=require("jsonwebtoken")
const User=require('../models/userSchema')

const Authenticate=async(req,res,next)=>{
try{
const token=req.cookies.jwtoken;
const verifyToken=jwt.verify(token, process.env.SECRET);

const RootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});

if(!RootUser){
    throw new Error('User not found')
}
req.token=token;
req.RootUser=RootUser;
req.userId=RootUser._id;

next();

}catch(err){
res.status(401).send('Unauthorized:No token provided')
console.log(err)

}
}

module.exports = Authenticate;