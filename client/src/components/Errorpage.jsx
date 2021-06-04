import React from 'react';
import  {NavLink} from 'react-router-dom'


const Errorpage=()=>{
  return(
         <div className="error">

             <h1 className="not-found">404</h1>
          <h1>We are Sorry Page not Found</h1>
          <h6>The page that you are looking for must have been moved or deleted</h6>
            <NavLink to="/" className="btn btn-primary">Back to Homepage</NavLink> 

         </div>


  )



}

export default Errorpage;