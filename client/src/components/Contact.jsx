import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <div className="header">
             
              <div className="phone">
                  
               <h5>Phone</h5>
               
               <p> <span><i class="zmdi zmdi-phone j"></i></span>2679813918  </p>



              </div>

              <div className="phone">
               <h5>Email</h5>
               <p> <span><i className="zmdi zmdi-email j"></i></span> yash.kh2001@gmail.com</p>

              </div>

              <div className="phone">
               <h5>Address</h5>
               <p> <span><i className="zmdi zmdi-home j"></i></span> Gaudipada lane 301 dakuta street,Mumbai </p>

              </div>
                  


             
              


            </div>
             <div className="card1">
                
               <h4 className="head">Get in touch</h4>

               <div className="forms">
                
                <input type="text" className="text-center at" placeholder="Your Name" />

                
                <input type="text" className="text-center at" placeholder="Your Email" />

               
                <input type="text" className="text-center at" placeholder="Your Phone" />
               </div>

               <textarea className="message" id="" cols="10" rows="3" placeholder="Message"></textarea>
               <button className="btn btn-primary contact-btn">Submit</button>

             </div>

        </div>
    )
}

export default Contact
