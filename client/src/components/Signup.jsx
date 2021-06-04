import React,{useState} from 'react'
import registration from '../images/register.jpg'
import { NavLink,useHistory } from 'react-router-dom'




const Signup = () => {

    const history=useHistory();
  
    const[user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })


 let name,value;
const handleInputs=(e)=>{
 
 name =e.target.name;
 value=e.target.value;

 setUser({...user,[name]:value});
}

const PostData= async (e)=>{
e.preventDefault();
const {name,email,phone,work,password,cpassword}=user;
const res=await fetch("/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        name,email,phone,work,password,cpassword
    })
}); 

const data=await res.json()


if(data.status===422||!data){
window.alert("registration failed")
console.log("registration failed")

}else{
    window.alert("registration successful")
    console.log("registration successful")
    history.push("/login")    
}



console.log(data);


}


    



    return (
        <>
             <section className="signup">
              <div className="container mt-5">
                <div className="signup-content">
                <div className="img-content">
                <img src={registration} className="img" alt="img registration" />
                <NavLink className="navlink" to="/login">Already registered?</NavLink>

                </div>
                 <div className="signup-form">
                 <h2 className="form-title">
                     Sign up
                 </h2>
                 <form method="POST" className="form-group">
                   
                       <div className="data">
                       <label htmlFor=""> <i class="zmdi zmdi-account zz"></i></label>
                   
                   <input type="text" className="btn2" name="name" value={user.name} onChange={handleInputs} placeholder="Enter your name" />
                   </div>
                   <div className="data">
                       <label htmlFor=""> <i class="zmdi zmdi-email zz"></i></label>
                   
                   <input type="text" className="btn2" name="email" value={user.email} onChange={handleInputs} placeholder="Enter your email" />
                   </div>

                   <div className="data">
                       <label htmlFor=""> <i class="zmdi zmdi-phone zz"></i></label>
                   
                   <input type="number" className="btn2" name="phone" value={user.phone} onChange={handleInputs} placeholder="Enter your phone" />
                   </div>

                   <div className="data">
                       <label htmlFor=""> <i class="zmdi zmdi-hotel zz"></i></label>
                   
                   <input type="text" className="btn2" name="work" value={user.work} onChange={handleInputs} placeholder="Enter your work" />
                   </div>

                   <div className="data">
                       <label htmlFor=""> <i class="zmdi zmdi-lock zz"></i></label>
                   
                   <input type="text" className="btn2" name="password" value={user.password} onChange={handleInputs} placeholder="Enter your password" />
                   </div>

                   <div className="data">
                       <label htmlFor=""> <i class="zmdi zmdi-lock-open zz"></i></label>
                   
                   <input type="text" className="btn2" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm your password" />
                   </div>
                   <input type="button" className="btn btn-primary" value="Register" name="signup" onClick={PostData} />

                   

                   


                 </form>
                 


                 </div>
                 

                 
                 </div>
                
                 
                 
                 </div>

                 
                 </section>
                 





        </>
    )
}

export default Signup
