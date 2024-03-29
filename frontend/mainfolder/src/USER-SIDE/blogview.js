import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./footer";
import blog from "./blog";
import bannert from "../assets/img/blog/top-view-different-objects-sport.jpg";

function BlogView() {
  const { title } = useParams();

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchBlogData(title);
  }, [title]);

  const fetchBlogData = async (blogTitle) => {
    try {
      const formattedTitle = blogTitle.replace(/-/g, " "); 
      const decodedTitle = decodeURIComponent(formattedTitle);
      const response = await axios.get(
        `http://localhost:2000/userroute/blogdetails/${encodeURIComponent(decodedTitle)}`
      );
      setBlogData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${bannert})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Blog</h2>
                <div className="contact-option">
                  <span style={{ fontSize: "1rem" }}>Detail Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {blogData && <div dangerouslySetInnerHTML={{ __html: blogData.description || "" }} />}
      </div>
      <Footer />
    </div>
  );
}

export default BlogView;
