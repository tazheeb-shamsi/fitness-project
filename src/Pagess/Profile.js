import React from 'react'
import "../Cs/Profile.css"
import joker from "../attacthments/abcd.jpg"
import { FaCog, FaBell, FaEnvelope, } from 'react-icons/fa';

function Profile() {
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#96cf" }}>
          <h1 className='sticky-top' style={{ color: "white" }}>Welcome to BodiedbyBrandy</h1>
        </div>

        <div style={{ border: "2px solid red", height: "91vh", display: "flex", width: "100%" }}>


          {/*Whole Sidebar Starts from here:- */}
          <div style={{ border: "2px solid green", width: "20%", padding: "12px 10px" }}>

            {/* Sidebar Top Starts from here:- */}
            <div className='mb-4' style={{ height: "30%", width: "95%", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ height: "100%" }}>
                <div style={{ width: "100%", border: "0px solid red", height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                  <img style={{ border: "5px solid grey", height: "90%", width: "100%", borderRadius: "100%" }} src={joker} alt="" />

                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <span style={{ fontWeight: "bold", color: "#ed3095" }}>User Name</span>
                </div>


                <div style={{ width: "100%", height: "23%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                  <div className='mx-2 mb-1' >
                    <a href="..."><FaBell color="white" size="1.2em" /></a>
                  </div>

                  <div className='mx-2 mb-1' >
                    <a href="..."><FaEnvelope color="white" size="1.2em" /></a>
                  </div>

                  <div className='mx-2 mb-1' >
                    <a href="..."><FaCog color="white" size="1.2em" /></a>
                  </div>


                </div>
              </div>
            </div>

            {/* Sidebar Top Ends here:- */}


            {/* Sidebar Botton Starts from here:- */}
            <div className='mx-1' style={{ boxShadow: "1px 1px 5px #b8b8b8  ", height: "65%", width: "95%", borderRadius: "15px", backgroundColor: "#fdfbfb", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2.5rem" }}>

              <div style={{ height: "100%", width: "100%", padding: "0.5rem 0.5rem", }}>
                <div style={{ height: "90%", width: "100%" }}>
                  <div className="mx-4" style={{ height: "20%", width: "100%", fontWeight: "bold", color: "#ada8a8", display: "flex", alignItems: "center", justifyContent: "start" }}>
                    Personalise
                  </div>



                  <div style={{ height: "70%", border: "2px solid black", width: "100%" }}>

                    <div style={{ height: "80%", border: "2px solid orange", width: "100%" }}>


                      <div className='mt-3' style={{ height: "33.33%", width: "100%", border: "0px solid black", backgroundColor: "rgb(240, 240, 255);" }}>
                        <a style={{ textDecoration: "none" }} href="/employeedash"><div style={{ backgroundColor: "#f0f0ff", borderRadius: "9px", fontSize: "15px", color: "#4e4e4e", display: "flex", alignItems: "center", justifyContent: "start", padding: "5px 5px" }}>< img className='mx-1' style={{ height: "20px" }} alt='analyticsImg' src="https://img.icons8.com/ios-glyphs/50/000000/edit-user-male.png" />Edit Profile</div></a>

                      </div>

                      <div style={{ height: "30.33%", width: "100%", border: "0px solid black", backgroundColor: "rgb(240, 240, 255);" }}>
                        <a style={{ textDecoration: "none" }} href="/employeedash"><div style={{ backgroundColor: "#f0f0ff", borderRadius: "9px", fontSize: "15px", color: "#4e4e4e", display: "flex", alignItems: "center", justifyContent: "start", padding: "5px 5px" }}>< img className='mx-1' style={{ height: "20px" }} alt='analyticsImg' src="https://img.icons8.com/ios-glyphs/50/000000/analytics.png" />Analytics</div></a>

                      </div>


                      <div style={{ height: "30.33%", width: "100%", border: "0px solid black", backgroundColor: "rgb(240, 240, 255);" }}>
                        <a style={{ textDecoration: "none" }} href="..."><div style={{ backgroundColor: "#f0f0ff", borderRadius: "9px", fontSize: "15px", color: "#4e4e4e", display: "flex", alignItems: "center", justifyContent: "start", padding: "5px 5px" }}>

                          <img className='mx-1' style={{ height: "20px" }} alt='analyticsImg' src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/50/000000/external-workout-immune-system-inipagistudio-mixed-inipagistudio.png" />

                          Workout Preference
                        </div></a>
                      </div>

                      <div style={{ height: "30.33%", width: "100%", border: "0px solid black", backgroundColor: "rgb(240, 240, 255);" }}>
                        <a style={{ textDecoration: "none" }} href="..."><div style={{ backgroundColor: "#f0f0ff", borderRadius: "9px", fontSize: "15px", color: "#4e4e4e", display: "flex", alignItems: "center", justifyContent: "start", padding: "5px 5px" }}>


                          <img className='mx-1' style={{ height: "20px" }} alt='analyticsImg' src="https://img.icons8.com/material/50/000000/exit.png" />

                          Logout
                        </div></a>
                      </div>
                    </div>

                  </div>
                  <div className="my-2">
                    <div><a href="...">Support & Feedback</a></div>
                    <div><a href="...">Terms & Conditions</a></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Botton Ends here:- */}
          </div >
          <div style={{ border: "2px solid Orange", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="row g-3 mb-3">
              <div className="col-md-6 col-xxl-1">
                <div className="card h-md-100 ecommerce-card-min-width">
                  <div className="card-header pb-0">
                    <h6 className="mb-0 mt-2 d-flex align-items-center">Weekly Activity
                      <span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Calculated according to last week's sales" aria-label="Calculated according to last week's sales">
                      </span>
                    </h6>
                  </div>

                </div>
                <div className="col-md-6 col-xxl-1">
                  <div className="col-md-6 col-xxl-1">
                    <div className="col-md-6 col-xxl-1">

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
