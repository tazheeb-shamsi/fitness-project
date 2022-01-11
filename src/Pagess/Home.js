import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../Cs/Home.css"


import img1 from '../attacthments/img001.jpg'
import img2 from '../attacthments/img002.jpg'
import img3 from '../attacthments/img003.jpg'

import iimg1 from '../attacthments/iimg1.jpg'
import iimg2 from '../attacthments/iimg2.jpg'
import iimg3 from '../attacthments/iimg3.jpg'
import iimg4 from '../attacthments/iimg4.jpg'



import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import Footer from './Footer'


function Home() {
  return (
    <>
      <div >
        <Navbar/>
<header>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</header>

{/* Daily-video section begins */}

<section  className="main_heading my-5">
<div className="text-center">
<h1 style={{color:"black"}} className="display-4"> Daily Videos </h1>
<hr style={{color:"grey"}} className="w-25 mx-auto "/>
</div>

{/* Daily-video-section Cards begins */}
<div className="row mx-3" >
  <div className="col-lg-3 col-md-6 col-12 col-xxl-6 " >
<figure style={{borderRadius:"20px"}}>
<img src={img1} className="img-fluid" alt="..."/>
</figure>
  </div>

  <div className="col-lg-3 col-md-6 col-12 col-xxl-6">
  <figure>
<img src={img2} className="img-fluid ths" alt="..."/>
</figure>
  </div>

  <div className="col-lg-3 col-md-6 col-12 col-xxl-6">
  <figure>
<img src={img3} className="img-fluid ths" alt="..."/>
</figure>
  </div>
  
  <div className="col-lg-3 col-md-6 col-12 col-xxl-6">
  <figure>
<img src={img1} className="img-fluid ths" alt="..."/>
</figure>
  </div>

  <div className="col-lg-3 col-md-6 col-12 col-xxl-6">
  <figure>
<img src={img3} className="img-fluid ths" alt="..."/>
</figure>
  </div>

  <div className="col-lg-3 col-md-6 col-12 col-xxl-6">
  <figure>
<img src={img1} className="img-fluid ths" alt="..."/>
</figure>
  </div>

  <div className="col-lg-3 col-md-6 col-12 col-xxl-6">
  <figure>
<img src={img2} className="img-fluid ths" alt="..."/>
</figure>
  </div>
  
  <div className="col-lg-3 col-md-6 col-12 col-xxl-6">
  <figure>
<img src={img1} className="img-fluid ths" alt="..."/>
</figure>
  </div>

  

  {/* video crd ends here */}
</div>
<div>

</div>
</section>

{/* Blog begins from here */}
<div className="abcd">
<section className="main_headings my-5">
<div className="text-center">
<h1 style={{color:"black"}} className="display-4"> Our Blogs </h1>
<hr style={{color:"grey"}} className="w-25 mx-auto "/>
</div>

{/* Blogs crds begins here */}

<div className="container blogs">
  <div className="row">
    <div className="col-md-4 col-10 col-xxl-4 mx-auto px-2">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row ">
    <div className="col-md-4">
      <img src={iimg1} alt="img" className="img-fluid"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Blog 1</h5>
        <p style={{color:"black"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-4 col-10 col-xxl-4 mx-auto px-2">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row ">
    <div className="col-md-4">
      <img src={iimg3} alt="img" className="img-fluid"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Blog 2</h5>
        <p style={{color:"black"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>

    <div className="col-md-4 col-10 col-xxl-4 mx-auto px-2">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row ">
    <div className="col-md-4">
      <img src={iimg2} alt="img" className="img-fluid"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Blog 3</h5>
        <p style={{color:"black"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>

    <div className="col-md-4 col-10 col-xxl-4 mx-auto px-2">
    <div className="card mb-3 g-" style={{maxWidth: "540px"}}>
  <div className="row ">
    <div className="col-md-4">
      <img src={iimg3} alt="img" className="img-fluid"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Blog 4</h5>
        <p style={{color:"black"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>

    <div className="col-md-4 col-10 col-xxl-4 mx-auto px-2">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row ">
    <div className="col-md-4">
      <img src={iimg4} alt="img" className="img-fluid"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Blog 5</h5>
        <p style={{color:"black"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>

    <div className="col-md-4 col-10 col-xxl-4 mx-auto px-2">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row ">
    <div className="col-md-4">
      <img src={iimg1} alt="img" className="img-fluid"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Blog 6</h5>
        <p style={{color:"black"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>

  </div> 

</div>
{/* Blogs crds ends here */}

</section>
</div>
        
      <div>
        <Footer />

      </div>
</div>
    
</>

  )
}

export default Home
