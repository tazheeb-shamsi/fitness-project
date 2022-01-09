import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../Cs/Diet.css"

function Diet() {
     return (
          <>
               <    Navbar />
               <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid red", width: "100%", height: "100vh" }}>

                    <div>
                         <h1>This is Diet Plan Section</h1>
                    </div>

               </div>
               <Footer />
          </>
     )
}

export default Diet
