import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from "./footer"
import '../assets/usercss/style.css'
import bannerimg6 from "../assets/img/breadcrumb/classes-breadcrumb.jpg"
 import Gallery1 from "../assets/img/gallery/gallery-1.jpg"
 import Gallery2 from "../assets/img/gallery/gallery-2.jpg"
 import Gallery3 from "../assets/img/gallery/gallery-3.jpg"
 import Gallery4 from "../assets/img/gallery/gallery-4.jpg"
 import Gallery5 from "../assets/img/gallery/gallery-5.jpg"
 import Gallery6 from "../assets/img/gallery/gallery-6.jpg"
 import Gallery7 from "../assets/img/gallery/gallery-7.jpg"



function gallery() {



  return (
<div>
  <Navbar/>
  <section className="breadcrumb-section set-bg"  style={{backgroundImage:`url(${bannerimg6})`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>Gallery</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Gallery Section Begin */}
  <div className="gallery-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="gallery-controls">
            <li className="active" data-filter=".all">all gallery</li>
            <li data-filter=".fitness">fitness</li>
            <li data-filter=".coaching">coaching</li>
            <li data-filter=".event">event</li>
            <li data-filter=".other">other</li>
          </ul>
        </div>
      </div>
      <div className="row gallery-filter">
        <div className="col-lg-6 mix all fitness">
          <img src={Gallery1} alt />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 mix all fitness coaching">
              <img src={Gallery2} alt />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12 mix all coaching">
                  <img src={Gallery3} alt />
                </div>
                <div className="col-lg-12 mix all coaching">
                  <img src={Gallery4} alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 mix all other">
              <img src={Gallery5} alt />
            </div>
            <div className="col-lg-6 mix all other">
              <img src={Gallery6} alt />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mix all event">
          <img src={Gallery7} alt />
        </div>
      </div>
    </div>
  </div>
  {/* Gallery Section End */}
 <Footer/>
</div>

  )
}

export default gallery





