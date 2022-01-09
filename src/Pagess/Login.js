import React from 'react'
import logo from '../attacthments/logo.png'
import '../Cs/Login.css'


function Login() {
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 15px 0" }}>
        <div className="login-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img style={{ height: "55px", width: "55px" }} src={logo} alt="logo" />
            </div>
            <div className="text-center social-btn">
              <a href="https://www.facebook.com/login/" className="btn btn-primary btn-lg btn-block"><b>Facebook</b></a>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="btn btn-info btn-lg btn-block"><b>Twitter</b></a>
              <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="btn btn-danger btn-lg btn-block"><b>Google</b></a>
            </div>
            <div className="or-seperator"><b>or</b></div>
            <div className="form-group">
              <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
            </div>
            <div className="form-group">
              <button style={{ backgroundColor: "#ed3095", border: "0px solid black" }} type="submit" className="btn btn-success btn-lg btn-block login-btn">Sign in</button>
            </div>
          </form>
          <div className="text-center"><span style={{ color: "white" }} >Don't have an account?</span> <a href="/Registration">Sign up here</a></div>
        </div>


        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

      </div>
    </>

  );
}

export default Login
