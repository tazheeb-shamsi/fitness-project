import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Videos = () => {
  return (
    <div>
      <Navbar />
      <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid Red", width: "100%", height: "100vh" }}>
        <h1>Hello this is Video Tutorial section</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Videos
