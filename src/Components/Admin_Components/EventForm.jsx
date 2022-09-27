import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "./../../Slices/url";
import { useNavigate } from "react-router-dom";

function EventForm() {
  const [productImg, setProductImg] = useState("");
  const [title, setTitle] = useState("");
  const [timing, setTiming] = useState("");
  const [desc, setDesc] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const event = {
    title,
    timing,
    desc,
    image: productImg,
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${url}/events`, event);
    toast.success("Event Successfully Posted", {
      position: "bottom-left",
    });
    navigate("/admin/usertable");
  };

  return (
    <>
      <h4 className="ms-3 mt-5 text-danger text-left">Add Event</h4>
      <div className="write-container">
        <div className="preview-image">
          {productImg ? (
            <img src={productImg} alt="" />
          ) : (
            <i class="bx bxs-image bx-tada"></i>
          )}
        </div>
        <div className="addImage">
          <span>Add Image</span>
          <label htmlFor="file">
            <i class="bx bx-image-add"></i>
          </label>

          <input
            type="file"
            name="file"
            id="file"
            onChange={handleImageUpload}
            hidden
          />
        </div>
        <div className="write-form">
          <div className="title">
            <label htmlFor="">Add Event Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name=""
              id=""
              value={title}
            />
          </div>
          <div className="title">
            <label htmlFor="">Add Event Timing</label>
            <input
              onChange={(e) => setTiming(e.target.value)}
              type="text"
              name=""
              id=""
              value={timing}
            />
          </div>

          <div className="description">
            <label htmlFor="">Add Description</label>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              name=""
              id=""
              value={desc}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button onClick={handleSubmit} className="btn ">
            Create Event
          </button>
        </div>
      </div>
    </>
  );
}

export default EventForm;
