import React from 'react'
import "../Cs/Start.css";
import logo from '../attacthments/android-chrome-192x192.png';
import img from '../attacthments/img001.jpg';
import backgroundVideo from '../attacthments/123bg.mp4';
// import img2 from '../attacthments/iimg1.jpg';
import {Link} from "react-router-dom"


function Start() {
  return (
    <>
  {/* Desktop Mode starts from here */}
  <div className='firstdiv visiblefirst'>
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
  {/* Desktop Mode ends from here */}



  {/* Mobile Mode starts from here */}
      <div className='seconddiv visiblesecond'>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>

<div className='mobdiv'>
  <video style={{ borderRadius: "15px" }}
    video autoPlay loop muted id='video'>
    <source src={backgroundVideo} type='video/mp4' />
  </video>
  <div style={{ display: "flex", justifyContent: "center", margin: "5% auto" }} className="card-img-overlay">
    <img style={{ height: "55px", width: "55px" }} src={logo} alt="logo" />
  </div>
</div>

</div>
<div className="card-img-overlay">
<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "80vh" }} className="btn0">
  <button style={{ backgroundColor: "#ed3095", border: "0px solid black" }}
    type="submit" className="btn-success btn-lg btn-block signup-btn"><a style={{ textDecoration: "none", color: "white" }} href="/Registration"> Get Started</a></button>
</div>
</div>
      </div>
    </>
  )
}

export default (Start)
