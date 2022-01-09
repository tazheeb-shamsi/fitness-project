import React from 'react'
import "../Components/Footer.css"


import { FaEnvelope, FaFacebook, FaGoogle, FaHome, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <>

      <div>

        {/* <!-- Footer --> */}
        <footer style={{ width: "100%" }} className="text-center text-lg-start bg-dark text-muted">


          {/* <!-- Section: " Social media --> */}
          <section
            style={{
              backgroundColor: " #6351ce", color: "white", width: "100%"
            }}
            className="d-flex justifyContent-between p-4">

            <div className="me-5">
              <span>Get connected with us on social networks</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a href="https://www.facebook.com/Bodiedbybrandij" className="me-4 text-reset">
                < FaFacebook size="1.7em" />
              </a>
              <a href="https://twitter.com/bodiedbybrandi" className="me-4 text-reset">
                <FaTwitter size="1.7em" />
              </a>
              <a href="https://www.youtube.com/channel/UCNh8cwn2BJtaKtXLz9KF2oA" className="me-4 text-reset">
                <FaGoogle size="1.7em" />
              </a>
              <a href="https://instagram.com/bodiedbybrandyj" className="me-4 text-reset">
                <FaInstagram size="1.7em" />
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: " Social media -->

  <!-- Section: " Links  --> */}
          <section className="/">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Bodiedby Brandy
                  </h6>
                  <hr style={{
                    width: " 60px", backgroundColor: " #7c4dff", height: " 2px"
                  }} />
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <hr style={{
                    width: " 60px", backgroundColor: " #7c4dff", height: " 2px"
                  }} />
                  <p>
                    <a href="/" className="text-reset">abcd</a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">efgh</a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">jklm</a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">Laravel</a>
                  </p>
                </div>
                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <hr style={{
                    width: " 60px", backgroundColor: " #7c4dff", height: " 2px"
                  }} />
                  <p>
                    <a href="/Workouts" className="text-reset">Workouts</a>
                  </p>
                  <p>
                    <a href="/Diet" className="text-reset">Diet Plans</a>
                  </p>
                  <p>
                    <a href="/Videos" className="text-reset">Taining Vidoes</a>
                  </p>
                  <p>
                    <a href="/Contact" className="text-reset">Contact Me!</a>
                  </p>
                </div>
                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <hr style={{
                    width: " 60px", backgroundColor: " #7c4dff", height: " 2px"
                  }} />
                  <p><FaHome /> Durgapur, WestBengal, IN</p>
                  <p>
                    <FaEnvelope />
                    <span> <a href="mailto: info@nargeeks.com">info@nargeeks.com</a></span>
                  </p>
                  <p><FaPhone /> <span>
                    <a href="tel: + 01 234 567 88"> + 01 234 567 88</a></span></p>
                  <p><FaPhone /> <a href="tel: + 01 234 567 88"> + 01 234 567 89</a></p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: " Links  -->

  <!-- Copyright --> */}
          <div className="text-center p-4" style={{ backgroundColor: " rgba(0, 0, 0, 0.05)", }}>
            © 2022 Copyright : <span>
              <a className="text-reset fw-bold" href="https://www.bodiedbybrandi.com">BodiedbyBrandy</a></span>
          </div>
          {/* // <!-- Copyright --> */}
        </footer>
      </div>

    </>
  )
}

export default Footer
