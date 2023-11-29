import React, { useEffect, useState } from 'react'
import '../assets/usercss/style.css'
import Navbar from './Navbar';
import Footer from "./footer"
import bannerimg4 from '../assets/img/breadcrumb/classes-breadcrumb.jpg'
import Blog1jpg from "../assets/img/blog/blog-1.jpg"
import blog2jpg from "../assets/img/blog/blog-2.jpg"
import blog3jpg from "../assets/img/blog/blog-3.jpg"
import blog4 from  "../assets/img/blog/blog-4.jpg"
import blog5 from "../assets/img/blog/blog-5.jpg"
import blog6 from "../assets/img/blog/blog-6.jpg"
import blog7 from "../assets/img/blog/blog-7.jpg"
import blog8 from "../assets/img/blog/blog-8.jpg"
import blog9 from "../assets/img/blog/blog-9.jpg"
// import blog10 from "../assets/img/blog/"
function blog() {
  // const [signupHide,setsignUphide] =useState(false)
  // const [nameShow,setNameShow] = useState(false)
  // const [profile,setProfile] = useState('')

  // useEffect(()=>{
  //   const getName = JSON.parse(localStorage.getItem('UserProfile')) || {};
  //   setProfile(getName)

  //   if(localStorage.getItem('UserProfile')){
  //     setNameShow(true);
  //     setsignUphide(false)

  //   }else{
  //     setNameShow(false);
  //     setsignUphide(true)
  //   }
  // },[])


  return (

<div>
  <Navbar/>
  {/* Header Section Begin */}
  {/* <header className="header-section">
    <div className="container">
      <div className="logo">
        <a href="./index.html">
          <img src="img/logo.png" alt />
        </a>
      </div>
      <div className="nav-menu">
        <nav className="mainmenu mobile-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/classes">Classes</a></li>
            <li className="active"><a href="/blog">Blog</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contacts</a></li>
       
          </ul>
        </nav>
        {nameShow &&(
    
    <a className="primary-btn signup-btn">{profile.username} </a>
      )}
    {signupHide && (
      
    <a href="/signup" className="primary-btn signup-btn">
      Sign Up Today
    </a>
  )}
      </div>

      <div id="mobile-menu-wrap" />
    </div>
  </header> */}
  {/* Header End */}
  {/* Breadcrumb Section Begin */}
  <section className="breadcrumb-section set-bg" style={{backgroundImage:`url(${bannerimg4})`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>Blog</h2>
            <div className="breadcrumb-option">
              <a href="./index.html"><i className="fa fa-home" /> Home</a>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Blog Section Begin */}
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={Blog1jpg} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Gym</a>
            </div>
            <h4><a href="./blog-details.html">10 States At Risk of Rural Hospital Closures</a></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog2jpg} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Sport</a>
            </div>
            <h4><a href="./blog-details.html">Diver who helped save Thai soccer team</a></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog3jpg} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Body</a>
            </div>
            <h4><a href="./blog-details.html">Man gets life in prison for stabbing</a></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog4} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Running</a>
            </div>
            {/* <h4><a href="./blog-details.html">Russia's first male synchronised swimmer</a></h4> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog5} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Gym</a>
            </div>
            <h4><a href="./blog-details.html">NYC measles vaccination order prevails in court</a></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog6} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Sport</a>
            </div>
            <h4><a href="./blog-details.html">The Week in Pictures: April 11 - 18</a></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog7} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Gym</a>
            </div>
            <h4><a href="./blog-details.html">Man who pretended to be faces new charges</a></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog8} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Body</a>
            </div>
            <h4><a href="./blog-details.html">10 States At Risk of Rural Hospital Closures</a></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item">
            <img src={blog9} alt />
            <div className="blog-widget">
              <div className="bw-date">February 17, 2019</div>
              <a href="#" className="tag">#Gym</a>
            </div>
            <h4><a href="./blog-details.html">Lenny Kravitz gives Arch Digest a look inside</a></h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>

  )
}

export default blog











