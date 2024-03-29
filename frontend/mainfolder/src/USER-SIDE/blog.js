import React, { useEffect, useState } from "react";
import "../assets/usercss/style.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import bannerimg4 from "../assets/img/breadcrumb/classes-breadcrumb.jpg";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function blog() {
  const [list, setlist] = useState([]);

  const navigate = useNavigate("")

  useEffect(() => {
    blogdata();
  }, []);

  const blogdata = async () => {
    try {
      const response = await axios.get("http://localhost:2000/userroute/blogs");
      setlist(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageClick = (title) => {
    const formattedTitle = title.replace(/ /g, "-");
    navigate(`/blogview/${encodeURIComponent(formattedTitle)}`);
  };


  return (
    <div>
      <Helmet>
        <title>BodyTuning-blogs</title>
        <meta name="description" content="Description of your blog page" />
      </Helmet>
      <Navbar />

      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url(${bannerimg4})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            {list.map((item,index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-blog-item">
                  <img style={{ cursor: 'pointer' }} onClick={() => handleImageClick(item.title)}  src={`http://localhost:2000/uploads/${item.image}`} alt />
                  <div className="blog-widget">
                    <div className="bw-date">February 17, 2019</div>
                    <Link
                      onClick={() => handleImageClick(item.title)}
                      to={`/blogview/${encodeURIComponent(item.title.replace(/ /g, "-"))}`}
                      className="tag"
                    >
                      #{item.title}
                    </Link>
                  </div>
                  <h4>
                    <a href="./blog-details.html">10 States At Risk of Rural Hospital Closures</a>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default blog;
