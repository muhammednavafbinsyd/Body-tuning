/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BasicLayout from "layouts/authentication/components/BasicDemoLayout";
import { useParams } from "react-router-dom";

function blogview2() {
  const { id } = useParams("");
  const [list, setlist] = useState([]);

  useEffect(() => {
    viewblog(id);
  }, [id]);

  const viewblog = async (id) => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      const response = await axios.get(`http://localhost:2000/adminroute/viewblog/${id}`);
      setlist(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BasicLayout>
      <section className="container">
        <div dangerouslySetInnerHTML={{ __html: list.description }}></div>
      </section>
    </BasicLayout>
  );
}

export default blogview2;
