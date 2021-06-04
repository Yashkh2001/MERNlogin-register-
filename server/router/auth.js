const express=require('express');

const jwt=require('jsonwebtoken')

const router= express.Router();

const bcrypt1=require('bcryptjs')

const authenticate=require('../middleware/Authenticate');


require('../db/conn');



const User=require('../models/userSchema')

router.get('/',(req,res)=>{
    res.send("hello from router");
})



/*router.post('/register',(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name || !email || !phone || !work  || !password || !cpassword  ){
        return res.status(422).res.json({error:"please fill the details"});
    }

    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email already exists"})
        }

        const user= new User({name,email,phone,work,password,cpassword});
        user.save().then(()=>{
            res.status(201).json({message:"user registered successfully"});
        }).catch((err)=> res.status(500).json({error:"failed to register"}))

    }).catch(err=> {console.log(err);});

    

    //console.log(name);
  //  res.json({message:req.body});
});*/




router.post('/register', async (req,res)=>{
 
    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name || !email || !phone || !work || !password || !cpassword )
    {
        return res.status(422).json({error:"please fill the details properly"})
    }

    try{

        const userExist= await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"user already exists"})
        }else if(password!= cpassword){
            return res.status(422).json({error:"password does not match"})
        }else{
            const user=new User({name,email,phone,work,password,cpassword})

        
        await user.save();
        res.status(201).json({message:"user registered successfully"})

        }

        

    }catch(err){ console.log(err)};

});


router.post('/signin', async (req,res)=>{



    try{

        let token;
      const {email,password}=req.body;

      if(!email || !password){
          return res.status(400).json({error:"please fill all the details"})
      }

      const userLogin = await User.findOne({email:email});

     // console.log(userLogin);

     

      if(userLogin){
        const isMatch= await bcrypt1.compare(password, userLogin.password);

         token= await userLogin.generateAuthToken();

        console.log(token);

        res.cookie("jwtoken",token,{
            expires:new Date(Date.now+20000000),
            httpOnly:true
        });
        
        if(!isMatch){
            return res.status(400).json({error:"invalid credentials pass"})
        }else{
            return res.json({message:"user login successfully"})
        }

    }else{
        return res.status(400).json({error:"invalid credentials"})
      }

      

    }catch(err){
      console.log(err);
    }


  router.get('/info',authenticate,(req,res)=>{
      console.log('hello my about');
      res.send(req.RootUser);
      
  })  

  



})


module.exports=router; 