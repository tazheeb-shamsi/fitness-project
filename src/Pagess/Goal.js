import React from 'react'
import logo from '../attacthments/android-chrome-192x192.png';
import "../Cs/Goal.css";
import bgimg from "../attacthments/download.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


function Goal() {
  return (
    <>

      <div style={{ backgroundImage: `url(${bgimg})`,backgroundSize:"cover",border: "2px solid red", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh"}}>        


          <div >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
              <img style={{ height: "100px", width: "100px" }} src={logo} alt="logo" />
            </div>
            <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }} className="display-4"> 

              <h3 className='py-5'> WHAT'S YOUR <br />GOAL?</h3>
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



    </>
  )
}

export default Goal
