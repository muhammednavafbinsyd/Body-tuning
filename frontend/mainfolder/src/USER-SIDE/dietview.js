import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import bgdietplan from '../assets/img/pexels-ella-olsson-1640773.jpg'
import Footer from './footer'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
function dietview() {

  const {id}= useParams("")
  const [trainerid,settrainerid] =useState("");
  const [list,setlist] = useState([])
  const [list2,setlist2] = useState([])
  const location = useLocation();
  const state = location.state;


  useEffect(()=>{
    // if(state){
    //   settrainerid(state.tid)
      // getplans(id)
      
    // }else{
      gettype(id)
    // }  

    geteditworkoutplan(id);
  },[id])


  const gettype = async(id)=>{
    try{
      const response = await axios.get(`http://localhost:2000/userroute/typeGetdiet/${id}`)
      setlist(response.data)
    }catch(err){
      console.log(err)
    }
  }

// const getplans = async(id) =>{
//   try{
//     const response = await axios.get(`http://localhost:2000/userroute/dietplanget/${id}`)
//     setlist2(response.data)
//   }catch(err){
//     console.log(err)
//   }
// }

const geteditworkoutplan = async (id) => {
  try {
    const response = await axios.get(`http://localhost:2000/adminroute/editdietplan/${id}`);
    const data = response.data;
    setlist2(data);
  } catch (err) {
    console.log(err);
  }
};



  return (

    <div>
      <Navbar/>
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${bgdietplan})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>DIET PLAN</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {list.map((item, index) => (
          <div key={index}>
            {/* Display each item's title and day1 without HTML tags */}
            <div dangerouslySetInnerHTML={{ __html: item.title }} />
            <div
              dangerouslySetInnerHTML={{
                __html: item.day1,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: item.day2,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: item.day3,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: item.day4,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: item.day5,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: item.day6,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: item.day7,
              }}
            />{" "}
          </div>
        ))}
      </div>
      <div className="container">
          <div >
            {/* Display each item's title and day1 without HTML tags */}
            <div dangerouslySetInnerHTML={{ __html: list2.title }} />
            <div
              dangerouslySetInnerHTML={{
                __html: list2.day1,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: list2.day2,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: list2.day3,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: list2.day4,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: list2.day5,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: list2.day6,
              }}
            />{" "}
            <div
              dangerouslySetInnerHTML={{
                __html: list2.day7,
              }}
            />{" "}
          </div>  
      </div>
      <Footer />

    </div>
  )
}

export default dietview