import React from 'react'


import logo from '../attacthments/apple-touch-icon.png';

  // import Tooltip from "@material-ui/core/Tooltip";
import Button from '@mui/material/Button';
import { FaHome, FaVideo, FaDumbbell , FaPhone, FaUtensils, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a href="/Home" className="navbar-brand"><img src={logo} alt="logo" style={{width:"40px",height:"40px"}}/></a>
        <button type="button" className="navbar-toggler " data-toggle="collapse" data-target="/navbarCollapse">
          <span className="navbar-toggler-icon justify-content-end"></span>
        </button>


        {/* <!-- Collection of nav links,  --> */}
        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-end ">
          <div className="navbar-nav">
           <a href="/Home" className="me-4 text-reset">
            < FaHome size="1.7em" /></a>
            <a href="/Videos" className="me-4 text-reset">
                < FaVideo size="1.7em" /></a>
            <a href="/Diet" className="me-4 text-reset">
                < FaUtensils size="1.7em" /></a>
            <a href="/Workouts" className="me-4 text-reset">
                < FaDumbbell size="1.7em" /></a>
            <a href="https://www.bodiedbybrandi.com/" className="me-4 text-reset" target="_blank">
                < FaShoppingCart size="1.7em" /></a>
            <a href="/Contact" className="me-4 text-reset">
                < FaPhone size="1.7em" /></a>
          </div>
          <div style={{ marginLeft: "1%" }}>
            <Button variant="outlined"><a style={{ textDecoration: "none", color: "#1a73e8" }} href="/Login">Login</a></Button></div>

          <span><Button style={{ marginLeft: "10px" }} variant="contained"><a style={{ textDecoration: "none", color: "white" }} href="/Registration"> Get Started</a></Button></span>

          </div>
      </nav>
    </div>
  )
}

export default Navbar
