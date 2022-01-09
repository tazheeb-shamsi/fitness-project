import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../Cs/Home.css"

import img from '../attacthments/bg.jpg'
import imgg from '../attacthments/imgg.png'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import Footer from './Footer'


function Home() {
  return (
    <>
      <div >
        <Navbar button="" abcd />

        <div className="coverimg">
          <img style={{ width: "100%", height: "100%" }} src={img} alt="Cover" />


          <div style={{ fontSize: "40px", color: "whitesmoke", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "100px" }} className="card-img-overlay">
            <h1> Welcome to BodeiedbyBrandy </h1>
          </div>
          <div style={{ marginTop: "-270px", fontSize: "20px", color: "whitesmoke", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p>Lorem, ipsum mollitia expedita quo fugiat!</p>
          </div>
        </div>




        <div style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>
          <div style={{ alignItems: "center", justifyContent: "center", color: "white", display: "flex", width: "100%", height: "30%" }}>

            <h1 style={{ marginTop: "50px", fontSize: "50px" }}> Daily Videos</h1>

          </div>
          <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "40%" }} className="apk">
            <div className="box">
              <img src="" alt="" />
              <h2  >video1</h2>
            </div>

            <div className="box">
              <img src="" alt="" />
              <h2 style={{ color: "black" }}>video2</h2>
            </div>

            <div className="box">
              <img src="" alt="" />
              <h2 style={{ color: "black" }}>video3</h2>
            </div>

            <div className="box">
              <img src="" alt="" />
              <h2 >video4</h2>
            </div>

            <div className="box">
              <img src="" alt="" />
              <h2 style={{ color: "black" }}>video5</h2>
            </div>
          </div>


          <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "30%" }}>
            <h1 style={{ marginTop: "-95px", fontSize: "50px" }}>Our Blogs</h1>
          </div>
          <div style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "70%" }} className="apks">

            <div className="boxx">
              <img style={{ height: "160px", margin: "auto", display: "block" }} src={imgg} alt="" />
              <h5 style={{ color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>Blog1</h5>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt nisi doloremque ipsum eveniet minima facere sunt cumque tempore sed? Totam, obcaecati, quasi voluptatibus debitis molestias vel delectus reprehenderit iure provident inventore asperiores mollitia recusandae dolorem! Ab laborum totam sed.
              </p>
            </div>

            <div className="boxx">
              <img style={{ height: "160px", margin: "auto", display: "block" }} src={imgg} alt="logo" />
              <h5 style={{ color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>Blog2</h5>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate explicabo cupiditate saepe. Obcaecati fuga mollitia reiciendis est placeat facilis voluptas vero vel rerum assumenda cum eligendi ratione asperiores itaque veniam illo perspiciatis ipsum quam, officia sed aperiam quasi libero!
              </p>
            </div>

            <div className="boxx">
              <img style={{ height: "160px", margin: "auto", display: "block" }} src={imgg} alt="" />
              <h5 style={{ color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>Blog3</h5>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero perspiciatis dolorem soluta nostrum perferendis earum dolore itaque ea tempore esse ut, praesentium harum ratione blanditiis excepturi aliquid quo libero? Officiis eaque amet doloribus, explicabo dolore minus nesciunt itaque esse?
              </p>
            </div>
          </div>
        </div>
      </div >

      <div style={{ marginTop: "90vh", border: "2px solid Yellow", width: "100%" }}>
        <Footer />

      </div>

    </>

  )
}

export default Home
