import React from 'react';
import logo from '../attacthments/logo.png'
import "../Cs/Registration.css";
import {Link} from "react-router-dom"




function Registration() {


  return (

    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      {/* <div style={{ border: "2px solid yellow", width: "31.83%", height: "100%" }}></div>
      <div style={{ border: "2px solid blue", display: "flex", width: "36.33%", height: "100%" }}> */}


      <div className="signup-form" >
        <div >



          <form action="/examples/actions/confirmation.php" method="post">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img style={{ height: "55px", width: "55px" }} src={logo} alt="logo" />
            </div>
            <h2>Create an Account</h2>
            <p className="hint-text"><h5>Sign up with your social media account or email address</h5></p>
            <div style={{ display: "flex", flexDirection: "column" }} className="social-btn text-center">


              <div >
                <a style={{ width: "100%" }} href="https://www.facebook.com/login/" className="btn btn-primary btn-lg"> Facebook</a>
                <a style={{ width: "100%" }} href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="btn btn-info btn-lg"> Twitter</a>
                <a style={{ width: "100%" }} href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="btn btn-danger btn-lg"> Google</a>
              </div>

            </div>
            <div className="or-seperator"><b>or</b></div>
            <div className="form-group">
              <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required="required" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
            </div>
            <div className="form-group">
             <Link to ="/Home"> <button style={{ backgroundColor: "#ed3095", border: "0px solid black" }}
                type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button></Link>
            </div>

          </form>

          <div className="text-center"> Already have an account?<a className="mx-3" href="/Login">Login here</a></div>



        </div >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>



      </div>
    </div>





  );
}

export default Registration
