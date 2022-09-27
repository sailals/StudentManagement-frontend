import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./../../Slices/url";

function Testimonial() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/testimonial`);
      console.log("test:", res.data);
      setTestimonial(res.data);
    }
    fetchData();
  }, []);

  return (
    <section className=" my-5 testimonial" id="authors">
      <div className="container">
        <h1 className="display-3 text-center fw-bold">
          Test<span className="text-danger">imonial</span>
        </h1>
        <h4 className=" text-center mt-4 mb-5">What Our Students Say</h4>
        <div className="quote box-icon text-center mb-5">
          <i class="bx bxs-quote-alt-left bx-tada text-danger"></i>
          <i class="bx bxs-quote-alt-right bx-tada text-danger"></i>
        </div>

        <div class="row">
          {testimonial?.map((test) => (
            <div class="col-lg-3 col-md-6">
              <div class="card text-center h-100">
                <div class="card-body">
                  <img
                    src={test.image}
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>{test.name}</h3>
                  <p className="mt-4">{test.desc}</p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
