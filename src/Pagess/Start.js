import React from 'react'
import "../Cs/Start.css";
import logo from '../attacthments/android-chrome-192x192.png';
import img from '../attacthments/img001.jpg';
import {Link} from "react-router-dom"


function Start() {
  return (
    <><div >
   <img style={{width:"100%", height:"auto"}} src={img} alt='bgimg' className='imgbg'/>
    <div style={{ display: "flex", justifyContent: "center", margin: "5% auto" }} className="card-img-overlay">
      <img style={{ height: "100px", width: "100px" }} src={logo} alt="logo" />
    </div>

     
      <div className="card-img-overlay">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "80vh" }} className="btn0">
          <Link to="/Goal"><button style={{ backgroundColor: "#ed3095", border: "0px solid black" }}
            type="submit" className="btn-success btn-lg btn-block signup-btn"> Get Started</button></Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default (Start)
