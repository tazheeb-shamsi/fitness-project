import React from 'react'
import "../Cs/Contact.css"
import { FaEnvelope, FaMapMarkerAlt, FaPhone, } from "react-icons/fa";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
     return (
          <div><Navbar />
               <div style={{ color: "black", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>

                    <div style={{
                         color: "Black", display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                         <div className="wrapper">
                              <div className="overlay">
                                   <div className="row d-flex justifyContent-center alignItems-center">
                                        <div >
                                             <div className="contact-us text-center">
                                                  <h3>Contact Us</h3>
                                                  <p className="mb-5">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing .</p>
                                                  <div className="row">
                                                       <div className="col-md-6">
                                                            <div className="mt-5 text-center px-3">
                                                                 <div className="d-flex flex-row alignItems-center"> <span className="icons"><FaMapMarkerAlt color="black" size="1.3em" /></span>
                                                                      <div className="address text-left"> <span >Address</span>
                                                                           <p style={{ color:"black"}}> West Bengal ,India</p>
                                                                      </div>
                                                                 </div>
                                                                 <div className="d-flex flex-row alignItems-center mt-3"> <span className="icons"><FaPhone color="black" size="1.3em" /></span>
                                                                      <div className="address text-left"> <span>e-mail</span>
                                                                           <p style={{ color:"black"}}>info@nargeeks.com</p>
                                                                      </div>
                                                                 </div>
                                                                 <div className="d-flex flex-row alignItems-center mt-3"> <span className="icons"><FaEnvelope color="black" size="1.3em" /></span>
                                                                      <div className="address text-left"> <span>Phone</span>
                                                                           <p style={{ color:"black"}}>+91 4143276543

                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="col-md-6">
                                                            <div className="text-center px-1">
                                                                 <div style={{ borderRadius: "10px" }} className="forms p-4 py-5 bg-white">
                                                                      <h5 style={{ color: "black" }
                                                                      }>Send Message</h5>
                                                                      <div className="mt-4 inputs"> <input type="text" className="form-control" placeholder="Name" /> <input type="text" className="form-control" placeholder="Email" /> <textarea className="form-control" placeholder="Type your message"></textarea> </div>
                                                                      <div className="button mt-4 text-left"> <button className="btn btn-dark">Send</button> </div>

                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div >
               <span><Footer /></span>
          </div>

     )
}

export default Contact
