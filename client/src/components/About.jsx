import React,{useEffect} from 'react'
import aboutimage from '../images/about.jpg'
import {useHistory} from 'react-router-dom'

const About = () => {
  
    return (
        <div className="about-content">
            
            <div className="container">
                <form method="GET">
              <div className="row">
               <div className="col-md-4">
                 <img className="about-img" src={aboutimage} alt="" />
                 

               </div>

               <div className="col-md-5">
                 <div className="profile-head">
                    <h4>Yash Khatwani</h4>
                    <h5>Web Developer</h5>
                    <p className="mt-3">CGPA:<span className="bold">8.10</span></p>

                <ul className="nav ">
                    <li className="nav-item ">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="skills-tab" data-toggle="tab" href="#skills" role="tab">Skills</a>
                    </li>
                    
                    
                </ul>
                <hr className="nav1" />

                 </div>
                 

               </div>

               <div className="col-md-3 mt-4" >
                <input type="submit" className="btn btn-secondary" value="Edit Profile" />

               </div>

              </div>

               <div className="row">

                <div className="col-md-4">

                    <div className="profile-work">
                 <a href ="http://youtube.com/" className="text-danger" >Youtube</a><br />
                 <a href="www.youtube.com" className="text-primary">Facebook</a><br />
                 <a href="www.youtube.com" className="text-success">Instagram</a><br />
                 </div>

                </div>

                <div className="col-md-8 about-info">

                    <div className="tab-content profile-tab">
                      <div className="tab-pane fade  active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <h3 className="header1">About</h3>
                       <div className="row">
                        <div className="col-md-6">
                            
                        <label htmlFor="">User Id</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">9080238908</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">Name</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Yash</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">Email</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">yash.kh2001@gmail.com</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">Phone</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">9080238908</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">Profession</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Web developer</label>
 

                        </div>
                         
                       </div>

                       </div>
 




                       <div className="tab-pane fade  active" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                       <h3 className="header1">Skills</h3>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">Python</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Intermediate</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">Javascript</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Advanced</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">React</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Advanced</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">MERN</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Intermediate</label>
 

                        </div>

                       </div>

                       <div className="row">
                        <div className="col-md-6">
                        <label htmlFor="">Java</label>
 

                        </div>

                        <div className="col-md-6">
                        <label htmlFor="">Intermediate</label>
 

                        </div>

                       </div>
                       </div>












                       
        

                   
                   
                    </div>
                  


                </div>


               </div>

              </form>

            

            </div>
            
        </div>
    )
}

export default About
