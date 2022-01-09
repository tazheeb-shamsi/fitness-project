import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Workouts() {
     return (
          <>

               <div>
                    <Navbar />
                    <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid red", width: "100%", height: "100vh" }}>
                         <h1> This is Workout Section</h1>
                    </div>
               </div>
               <Footer />
          </>
     )
}

export default Workouts
