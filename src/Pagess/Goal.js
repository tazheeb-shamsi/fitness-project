import React from 'react'
// import logo from '../attacthments/logo.png';
import "../Cs/Goal.css";
import bgimg from "../attacthments/img1.png"
import {Link} from "react-router-dom"

function Goal() {
  return (
    <>

      <div style={{ border: "2px solid red", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh", padding: "0 15px 0" }}>



        <div style={{
          backgroundImage: `url(${bgimg})`, margin: "20%", padding: "0px",
          display: "flex", justifyContent: "center", alignItems: "center",
          border: "2px solid grey",
          borderRadius: " 25px", width: "300px", height: "90%"
        }}>


          {/* <div style={{ display: "flex", alignItem: "center", justifyContent: "center" }} >
              <img style={{ height: "55px", width: "55px" }} src={logo} alt="logo" />
            </div> */}


          <div>
            <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }} className="heading">

              <h3> WHAT'S YOUR <br />GOAL</h3>
            </div>


            <div className="form-groupp mt-1">
            <button style={{ color: "white", borderRadius: "70px" }}
                type="submit" className="btn ">LOOSE WEIGHT <p className="smallfont">Get lean fast and healthy </p></button>
            </div>

            <div >
              <div className="form-groupp mt-1">
              <button style={{ color: "white", borderRadius: "70px" }}
                  type="submit" className="btn ">GET LEAN <p className="smallfont">Tone up and get in better shape </p></button>
              </div>
            </div>


            {/* <div className="form-groupp">
                <button style={{ color: "white", borderRadius: "100px", width: "65px" }}
                  type="submit" className="btn mt-5"><a href="/Activity">NEXT</a></button>
              </div> */}
          </div>
        </div>

      </div>



    </>
  )
}

export default Goal
