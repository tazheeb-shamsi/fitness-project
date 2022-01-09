import React from 'react'
import "../Cs/Activity.css"
import bgimg from "../attacthments/img2.png"


function Activity() {
  return (
    <>
      <div >
        <div style={{ border: "3pxx solid green", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <div style={{
                backgroundImage: `url(${bgimg})`, margin: "20%", padding: "0px",
                display: "flex", justifyContent: "center", alignItems: "center",
                border: "2px solid grey",
                borderRadius: " 25px", width: "300px", height: "90%"
              }}>

                <div className="my-5">


                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white" }} className="heading">
                    <h3>Activeness <br />In daily Life</h3>
                  </div>
                  <div className="form-groupp">
                    <button style={{ color: "white" }}
                      type="button" className="btn ">Not at all <p className="smallfont">I work in Office or donot workout </p></button>
                  </div>

                  <div >
                    <div className="form-groupp ">
                    <button style={{ color: "white" }}
                        type="button" className="btn ">Slightly Active <p className="smallfont">Upto 2Hrs per week </p></button>
                    </div>
                  </div>

                  <div >
                    <div className="form-groupp ">
                    <button style={{ color: "white" }}
                        type="submit" className="btn ">Active <p className="smallfont">Upto 4Hrs   per week</p></button>
                    </div>
                  </div>

                  <div >
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
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Activity
