import React, { useCallback, useEffect, useState } from "react";
import BasicLayout from "layouts/authentication/components/BasicDemoLayout";
import { useLocation, useParams } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "@tinymce/tinymce-react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import SoftBox from "components/SoftBox";
import Button from "@mui/material/Button";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

function Editworkoutplan() {
  const { id } = useParams();
  const [eid, seteid] = useState("");

  const location = useLocation();
  const state = location.state;

  // const [title,settitle] = useState("")
  // const[day1,setDay1] = useState("")
  // const [day2,setDay2] = useState("")
  // const [day3,setDay3] = useState("")
  // const [day4,setDay4] = useState("")
  // const [day5,setDay5] = useState("")
  // const [day6,setDay6] = useState("")
  // const [day7,setDay7] = useState("")

  const [dietedit, setdietedit] = useState({
    title: "",
    day1: "",
    day2: "",
    day3: "",
    day4: "",
    day5: "",
    day6: "",
    day7: "",
    type:""
  });


  useEffect(() => {
    if (state) {
      seteid(state.id);
    }
    geteditworkoutplan();
    typeofplan();
  }, [state, id]);

  const geteditworkoutplan = useCallback(async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      const response = await axios.get(`http://localhost:2000/adminroute/editdietplan/${id}`);
      const data = response.data;
      setdietedit(data);
    } catch (err) {
      console.log(err);
    }
  }, [eid]);



  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = {
      trainerId: id,
      type:dietedit.type,
      title: dietedit.title,
      day1: dietedit.day1,
      day2: dietedit.day2,
      day3: dietedit.day3,
      day4: dietedit.day4,
      day5: dietedit.day5,
      day6: dietedit.day6,
      day7: dietedit.day7,
    };

    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    axios
      .put(`http://localhost:2000/adminroute/updatedietplan/${id}`, formData, {
  
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = `/dietplan/${eid}`;
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (editorName, content) => {
    setdietedit((prevdietEdit) => ({
      ...prevdietEdit,
      [editorName]: content,
    }));
  };
  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setdietedit((prevdietEdit) => ({
      ...prevdietEdit,
      type: selectedType,
    }));
  };

  const typeofplan = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      const response = await axios.get("http://localhost:2000/adminroute/plantypeGet");
      settype(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const [type,settype]= useState([])

  const quillStyle = {
    display: "block",
    justifyContent: "space-evenly",
    margin: "20px",
    width: "600px",
    height: "400px",
  };
  const btn = {
    display: "block",
    justifyContent: "space-between",
    margin: "20px",
    width: "20rem",
  };

  const containerStyle2 = {
    display: "flex",
    justifyContent: "center",
    marginLeft: "10rem",
  };

  const example_image_upload_handler = (blobInfo) => {
    return blobInfo;
  };

  const openFilePicker = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = (event) => {
      return URL.createObjectURL(event.target.files[0]);
    };
    input.click();
  };
  const example_image_upload_handlertyne = (blobInfo, progress) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", "http://localhost:2000/adminroute/tinymceImageUpload");

      xhr.upload.onprogress = (e) => {
        progress((e.loaded / e.total) * 100);
      };

      xhr.onload = () => {
        if (xhr.status === 403) {
          reject({ message: "HTTP Error: " + xhr.status, remove: true });
          return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
          reject("HTTP Error: " + xhr.status);
          return;
        }

        const json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != "string") {
          reject("Invalid JSON: " + xhr.responseText);
          return;
        }

        resolve(json.location);
      };

      xhr.onerror = () => {
        reject("Image upload failed due to a XHR Transport error. Code: " + xhr.status);
      };

      const formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());

      xhr.send(formData);
    });
  const editorConfig = {
    // ... (other config options)
    apiKey: "3sbxiwem8u0h6sbro031h6f4rpgr52p2sxff3d2pzsf8uahg",
    plugins: [
      // ... (other plugins)
      "image",
      "lists",
      "code", // Include the image plugin
    ],
    toolbar: "bullist numlist image",
    menu: { tools: { title: "Tools", items: "listprops" } },
    image_advtab: true,
    image_uploadtab: true,
    // images_upload_url: 'http://localhost:2000/adminroute/tinymceImageUpload',
    images_upload_handler: example_image_upload_handlertyne,
    images_upload_base_path: "http://localhost:2000/",
  };
  return (
    <BasicLayout>
      <Row>
        <select name="type" value={dietedit.type} id="Active-Deactive" onChange={handleTypeChange}>
              {type.map((item, index) => (
                <option value={item._id} key={index}>{item.type}</option>
              ))}
            </select>
        <Col>
          <SoftBox mb={3}>
            <label>Title</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="title"
              value={dietedit.title}
              onEditorChange={(content, editor) => {
                handleChange("title", content);
              }}
              placeholder="Title"
            />
          </SoftBox>
        </Col>
        <Col>
          <SoftBox mb={3}>
            <label>Monday</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="day1"
              value={dietedit.day1}
              onEditorChange={(content, editor) => {
                handleChange("day1", content);
              }}
              placeholder="Day1"
            />
          </SoftBox>
        </Col>
        <Col>
          <SoftBox mb={3}>
            <label>Tuesday</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="day2"
              value={dietedit.day2}
              onEditorChange={(content, editor) => {
                handleChange("day2", content);
              }}
              placeholder="Day2"
            />
          </SoftBox>
        </Col>
        <Col>
          <SoftBox mb={3}>
            <label>Wenesday</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="day3"
              value={dietedit.day3}
              onEditorChange={(content, editor) => {
                handleChange("day3", content);
              }}
              placeholder="Day2"
            />
          </SoftBox>
        </Col>
      </Row>
      <Row>
        <Col>
          <SoftBox mb={3}>
            <label>Thursday</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="day4"
              value={dietedit.day4}
              onEditorChange={(content, editor) => {
                handleChange("day4", content);
              }}
              placeholder="Day2"
            />
          </SoftBox>
        </Col>
        <Col>
          <SoftBox mb={3}>
            <label>Friday</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="day5"
              value={dietedit.day5}
              onEditorChange={(content, editor) => {
                handleChange("day5", content);
              }}
              placeholder="Day2"
            />
          </SoftBox>
        </Col>
        <Col>
          <SoftBox mb={3}>
            <label>Saturday</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="day6"
              value={dietedit.day6}
              onEditorChange={(content, editor) => {
                handleChange("day6", content);
              }}
              placeholder="Day2"
            />
          </SoftBox>
        </Col>
        <Col>
          <SoftBox mb={3}>
            <label>Sunday</label>
            <Editor
              init={editorConfig}
              style={quillStyle}
              theme="snow"
              name="day7"
              value={dietedit.day7}
              onEditorChange={(content, editor) => {
                handleChange("day7", content);
              }}
              placeholder="Day2"
            />
          </SoftBox>
        </Col>
      </Row>
      <div style={containerStyle2}>
        <SoftBox mb={3}>
          <Button variant="contained" style={btn} onClick={handleUpdate}>
            Update
          </Button>
        </SoftBox>
      </div>
    </BasicLayout>
  );
}

export default Editworkoutplan;
