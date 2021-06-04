import React,{useState} from 'react'

import { NavLink,useHistory } from 'react-router-dom'
import loginimg from '../images/login.png'

const Login = () => {

const history=useHistory()
const [login,loginData]=useState({email:"",password:""})

let name,value;
const ConsoleData=(e)=>{
name=e.target.name;
value=e.target.value;
loginData({...login,[name]:value});
}



const SignUser= async (e)=>{
e.preventDefault();
const {email,password}=login;

const res=await fetch('/signin',{
method:"POST",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify({
 email,password
})

})
const data=res.json()
if(res.status===400||!data){
    window.alert("login unsuccessful")
}else{
    window.alert("login successful")
    history.push('/');
}


}






     return (
        <section className="signup">
        <div className="container mt-5">

        
        <div className="signup-content">
        <div className="img-content">
                <img src={loginimg} className="img" alt="img registration" />
                <NavLink className="navlink1" to="/signup">Not registered?</NavLink>

                </div>
                
        
         <div className="login-form">
         <h2 className="form-title">
             Login
         </h2>
         <form method="POST" className="form-group">
           
               
           <div className="login-data">
               <label htmlFor=""> <i class="zmdi zmdi-email zz"></i></label>
           
           <input type="text" name="email" value={login.email} onChange={ConsoleData} placeholder="Enter your email" />
           </div>

           

           

           <div className="login-data">
               <label htmlFor=""> <i class="zmdi zmdi-lock zz"></i></label>
           
           <input type="text" name="password" value={login.password} onChange={ConsoleData} placeholder="Enter your password" />
           </div>
           
           <input type="button" className="btn btn-primary" onClick={SignUser} value="login" />
          

           


         </form>
         



         </div>
         
         
         
         </div>
         
         
         
         </div>
         </section>



    )
}

export default Login
