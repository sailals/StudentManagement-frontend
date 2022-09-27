import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { url } from "./../Slices/url";

function StudentTestimonial() {
  const auth = useSelector((state) => state.auth);

  const [desc, setDesc] = useState("");

  const testimonial = {
    name: auth.firstname,
    image: auth.image.url,
    desc,
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${url}/testimonial`, testimonial);
    toast.success("Testimonial Added", {
      position: "bottom-left",
    });
    navigate("/");
  };

  return (
    <>
      <h4 className="ms-3 mt-5 text-white text-left">Add Testimonial</h4>

      <div className="write-container">
        <div className="write-form">
          <div className="description">
            <label htmlFor="">Add Testimonial</label>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              cols="30"
              rows="10"
              value={desc}
            ></textarea>
          </div>
          <button onClick={handleClick} className="btn ">
            Add Testimonial
          </button>
        </div>
      </div>
    </>
  );
}

export default StudentTestimonial;
