import React from 'react'

import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/Home" className="navbar-brand">Bodiedby<b>Brandy</b></a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="/navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* <!-- Collection of nav links,  --> */}
        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
          <div className="navbar-nav">
            <a href="/Home" className="nav-item nav-link">Home</a>
            <a href="/Videos" className="nav-item nav-link">Videos</a>

            <a href="/Diet" className="nav-item nav-link ">Diet Plans</a>
            <a href="/Workouts" className="nav-item nav-link">Workouts</a>
            <a href="/Contact" className="nav-item nav-link">Contact</a>
          </div>
          <div style={{ marginLeft: "10%" }}>
            <Button variant="outlined"><a style={{ textDecoration: "none", color: "#1a73e8" }} href="/Login">Login</a></Button></div>

          <span><Button style={{ marginLeft: "10px" }} variant="contained"><a style={{ textDecoration: "none", color: "white" }} href="/Registration"> Get Started</a></Button></span>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
