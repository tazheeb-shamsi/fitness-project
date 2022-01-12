import React from 'react'
import "../Cs/Activity.css"
import bgimg from "../attacthments/img2.png"
import logo from '../attacthments/android-chrome-192x192.png';


function Activity() {
  return (
    <>      
        
      <div style={{ backgroundImage: `url(${bgimg})`,backgroundSize:"cover",border: "2px solid red", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh"}}>  

                
      <div > 
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
              <img style={{ height: "100px", width: "100px" }} src={logo} alt="logo" />
            </div>
            <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }} className="display-4"> 
            <h3 className='py-3'>Activeness <br />In daily Life</h3>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="form-groupp">
                    <button style={{ color: "white" }}
                      type="submit" className="btn "><a style={{ textDecoration: "none", color: "white" }} href="/Home">Not at all <p className="smallfont">I work in Office or donot workout </p>
                    </a></button>
                  </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="form-groupp ">
                    <button style={{ color: "white" }}
                        type="button" className="btn ">Slightly Active <p className="smallfont">Upto 2Hrs per week </p></button>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="form-groupp ">
                    <button style={{ color: "white" }}
                        type="submit" className="btn ">Active <p className="smallfont">Upto 4Hrs   per week</p></button>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="form-groupp ">
                    <button style={{ color: "white" }}
                        type="submit" className="btn  ">Very Active <p className="smallfont">Intense physical activity per week</p></button>
                    </div>
                  </div>

                  {/* <div className="form-groupp">
                    <button style={{ color: "white" }}
                      type="submit" className="btn mt-2">NEXT</button>
                  </div> */}
                
              </div>
              </div>
              
              
              
          
        
     

    </>
  )
}

export default Activity
