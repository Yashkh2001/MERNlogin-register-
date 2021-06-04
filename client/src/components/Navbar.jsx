import React from 'react'
import { NavLink } from 'react-router-dom'





const Navbar = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">MERNAPP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link home" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to="about">About <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to="contact">Contact <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to="login">Login <span className="sr-only">(current)</span></NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to="signup">Register <span className="sr-only">(current)</span></NavLink>
      </li>
      


    </ul>
   
  </div>
</nav>

        </>
    )
}

export default Navbar
