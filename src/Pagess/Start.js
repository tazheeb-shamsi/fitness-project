import React from 'react'
import "../Cs/Start.css";
import logo from '../attacthments/logo.png';
import backgroundVideo from '../attacthments/123bg.mp4';
import {Link} from "react-router-dom"


function Start() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>

        <div style={{
          display: "flex", border: "2px solid grey", width: "300px", borderRadius: "15px"
        }}>
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
          <Link to="/Goal"><button style={{ backgroundColor: "#ed3095", border: "0px solid black" }}
            type="submit" className="btn-success btn-lg btn-block signup-btn"> Get Started</button></Link>
        </div>
      </div>
    </>
  )
}

export default (Start)
