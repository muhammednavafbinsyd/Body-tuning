
// import React, { useEffect, useState } from 'react'
// import Navbar from './Navbar'
// import '../assets/usercss/style.css'
// import bannerimg3 from "../assets/img/breadcrumb/classes-breadcrumb.jpg"



// function classes() {


//   // const [signupHide,setsignUphide] =useState(false)
//   // const [nameShow,setNameShow] = useState(false)
//   // const [profile,setProfile] = useState('')

//   // useEffect(()=>{
//   //   const getName = JSON.parse(localStorage.getItem('UserProfile')) || {};
//   //   setProfile(getName)

//   //   if(localStorage.getItem('UserProfile')){
//   //     setNameShow(true);
//   //     setsignUphide(false)

//   //   }else{
//   //     setNameShow(false);
//   //     setsignUphide(true)
//   //   }
//   // })
//   return (
// <div>
//   <Navbar/>
//   {/* Header Section Begin */}
//   {/* <header className="header-section">
//     <div className="container">
//       <div className="logo">
//         <a href="./index.html">
//           <img src="img/logo.png" alt />
//         </a>
//       </div>
//       <div className="nav-menu">
//         <nav className="mainmenu mobile-menu">
//           <ul>
//             <li><a href="/home">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li className="active"><a href="/classes">Classes</a></li>
//             <li><a href="/blog">Blog</a></li>
//             <li><a href="/gallery">Gallery</a></li>
//             <li><a href="/contact">Contacts</a></li>
//           </ul>
//         </nav>

//          {nameShow &&(
    
//     <a className="primary-btn signup-btn">{profile.username} </a>
//       )}
//     {signupHide && (
      
//     <a href="/signup" className="primary-btn signup-btn">
//       Sign Up Today
//     </a>
//   )}
//       </div>
//       <div id="mobile-menu-wrap" />
//     </div>
//   </header> */}
//   {/* Header End */}
//   {/* Breadcrumb Section Begin */}
//   <section className="breadcrumb-section set-bg" style={{backgroundImage:`url(${bannerimg3})`}}>
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="breadcrumb-text">
//             <h2>Classes</h2>
//             <div className="breadcrumb-option">
//               <a href="./index.html"><i className="fa fa-home" /> Home</a>
//               <span>Class</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* Breadcrumb Section End */}
//   {/* Register Section Begin */}
//   <section className="register-section classes-page spad">
//     <div className="container">
//       <div className="classes-page-text">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="register-text">
//               <div className="section-title">
//                 <h2>Register Now</h2>
//                 <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
//               </div>
//               <form action="#" className="register-form">
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <label htmlFor="name">First Name</label>
//                     <input type="text" id="name" />
//                   </div>
//                   <div className="col-lg-6">
//                     <label htmlFor="email">Your email address</label>
//                     <input type="text" id="email" />
//                   </div>
//                   <div className="col-lg-6">
//                     <label htmlFor="last-name">Last Name</label>
//                     <input type="text" id="last-name" />
//                   </div>
//                   <div className="col-lg-6">
//                     <label htmlFor="mobile">Mobile No*</label>
//                     <input type="text" id="mobile" />
//                   </div>
//                 </div>
//                 <button type="submit" className="register-btn">Get Started</button>
//               </form>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="register-pic">
//               <img src="img/register-pic.jpg" alt />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* Register Section End */}
//   {/* Classes Section Begin */}
//   <section className="classes-section classes-page spad">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="section-title">
//             <h2>UNLIMITED CLASSES</h2>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-1.jpg">
//             <div className="si-text">
//               <h4>Yoga</h4>
//               <span><i className="fa fa-user" /> Ryan Knight</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-4.jpg">
//             <div className="si-text">
//               <h4>Karate</h4>
//               <span><i className="fa fa-user" /> Kevin McCormick</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-2.jpg">
//             <div className="si-text">
//               <h4>Running</h4>
//               <span><i className="fa fa-user" /> Randy Rivera</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-5.jpg">
//             <div className="si-text">
//               <h4>Dance</h4>
//               <span><i className="fa fa-user" /> Russell Lane</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-3.jpg">
//             <div className="si-text">
//               <h4>Personal Training</h4>
//               <span><i className="fa fa-user" /> Cole Robertson</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-6.jpg">
//             <div className="si-text">
//               <h4>Weight Loss</h4>
//               <span><i className="fa fa-user" /> Ryan Scott</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-7.jpg">
//             <div className="si-text">
//               <h4>Box</h4>
//               <span><i className="fa fa-user" /> Chester Bowen</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-8.jpg">
//             <div className="si-text">
//               <h4>Cardio</h4>
//               <span><i className="fa fa-user" /> Jorge Fernandez</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <div className="single-class-item set-bg" data-setbg="img/classes/classes-8.jpg">
//             <div className="si-text">
//               <h4>Crossfit</h4>
//               <span><i className="fa fa-user" /> Chester Bowen</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* Classes Section End */}
//   {/* Classes Timetable Section Begin */}
//   <section className="classes-timetable spad">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="section-title">
//             <h2>Class Timetable</h2>
//           </div>
//           <div className="nav-controls">
//             <ul>
//               <li className="active" data-tsfilter="all">All Class</li>
//               <li data-tsfilter="gym">Gym</li>
//               <li data-tsfilter="crossfit">Crossfit</li>
//               <li data-tsfilter="cardio">Cardio</li>
//               <li data-tsfilter="body">Body</li>
//               <li data-tsfilter="yoga">Yoga</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="schedule-table">
//             <table>
//               <thead>
//                 <tr>
//                   <th />
//                   <th>Monday</th>
//                   <th>Tuesday</th>
//                   <th>Wednesday</th>
//                   <th>Thursday</th>
//                   <th>Friday</th>
//                   <th>Saturday</th>
//                   <th>Sunday</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="workout-time">10.00</td>
//                   <td className="hover-bg ts-item" data-tsmeta="gym">
//                     <h6>Gym</h6>
//                     <span>10.00 - 11.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="yoga">
//                     <h6>Yoga</h6>
//                     <span>10.00 - 12.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="body">
//                     <h6>Body</h6>
//                     <span>10.00 - 12.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="cardio">
//                     <h6>Cardio</h6>
//                     <span>10.00 - 11.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="workout-time">14.00</td>
//                   <td />
//                   <td className="hover-bg ts-item">
//                     <h6>Running</h6>
//                     <span>14.00 - 16.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item">
//                     <h6>Box</h6>
//                     <span>14.00 - 15.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="gym">
//                     <h6>Gym</h6>
//                     <span>14.00 - 16.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                 </tr>
//                 <tr>
//                   <td className="workout-time">16.00</td>
//                   <td className="hover-bg ts-item" data-tsmeta="cardio">
//                     <h6>Cardio</h6>
//                     <span>16.00 - 18.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="gym">
//                     <h6>Gym</h6>
//                     <span>16.00 - 19.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="yoga">
//                     <h6>Yoga</h6>
//                     <span>16.00 - 18.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="gym">
//                     <h6>Gym</h6>
//                     <span>16.00 - 20.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="workout-time">18.00</td>
//                   <td className="hover-bg ts-item">
//                     <h6>Box</h6>
//                     <span>18.00 - 22.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td className="hover-bg ts-item" data-tsmeta="body">
//                     <h6>Body</h6>
//                     <span>18.00 - 20.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="crossfit">
//                     <h6>Crossfit</h6>
//                     <span>18.00 - 21.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="cardio">
//                     <h6>Cardio</h6>
//                     <span>18.00 - 22.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                 </tr>
//                 <tr>
//                   <td className="workout-time">20.00</td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="gym">
//                     <h6>Gym</h6>
//                     <span>20.00 - 12.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td className="hover-bg ts-item" data-tsmeta="body">
//                     <h6>Body</h6>
//                     <span>20.00 - 21.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="cardio">
//                     <h6>Cardio</h6>
//                     <span>20.00 - 22.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                   <td />
//                   <td className="hover-bg ts-item" data-tsmeta="crossfit">
//                     <h6>Crossfit</h6>
//                     <span>20.00 - 21.00</span>
//                     <div className="trainer-name">
//                       John Smith
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* Trainer Table Schedule Section End */}
//   {/* Footer Banner Section Begin */}
//   <section className="footer-banner">
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-lg-6">
//           <div className="footer-banner-item set-bg" data-setbg="img/footer-banner/footer-banner-1.jpg">
//             <span>New member</span>
//             <h2>7 days for free</h2>
//             <p>Complete the training sessions with us, surely you will be happy</p>
//             <a href="#" className="primary-btn">Get Started</a>
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <div className="footer-banner-item set-bg" data-setbg="img/footer-banner/footer-banner-2.jpg">
//             <span>contact us</span>
//             <h2>09 746 204</h2>
//             <p>If you trust us on your journey they dark sex does not disappoint you!</p>
//             <a href="#" className="primary-btn">Get Started</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* Footer Banner Section End */}
//   {/* Footer Section Begin */}
//   <footer className="footer-section">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-4">
//           <div className="contact-option">
//             <span>Phone</span>
//             <p>(123) 118 9999 - (123) 118 9999</p>
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="contact-option">
//             <span>Address</span>
//             <p>72 Kangnam, 45 Opal Point Suite 391</p>
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="contact-option">
//             <span>Email</span>
//             <p>contactcompany@Gutim.com</p>
//           </div>
//         </div>
//       </div>
//       <div className="subscribe-option set-bg" data-setbg="img/footer-signup.jpg">
//         <div className="so-text">
//           <h4>Subscribe To Our Mailing List</h4>
//           <p>Sign up to receive the latest information </p>
//         </div>
//         <form action="#" className="subscribe-form">
//           <input type="text" placeholder="Enter Your Mail" />
//           <button type="submit"><i className="fa fa-send" /></button>
//         </form>
//       </div>
//       <div className="copyright-text">
//         <ul>
//           <li><a href="#">Term&amp;Use</a></li>
//           <li><a href="#">Privacy Policy</a></li>
//         </ul>
//         <p>©</p><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
//           Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> 
//           {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p><p />
//         <div className="footer-social">
//           <a href="#"><i className="fa fa-facebook" /></a>
//           <a href="#"><i className="fa fa-twitter" /></a>
//           <a href="#"><i className="fa fa-instagram" /></a>
//           <a href="#"><i className="fa fa-dribbble" /></a>
//         </div>
//       </div>
//     </div>
//   </footer>
//   {/* Footer Section End */}
//   {/* Js Plugins */}
// </div>

//   )
// }

// export default classes



