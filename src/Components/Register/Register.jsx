import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container">
        <div className="wrappers  py-2">
          <div className="row page mt-4">
            <div className="col-md-6">
              <img
                src="../../Images/register.jpg"
                alt=""
                className="img-fluid "
              />
            </div>
            <div className="col-md-6">
              <div className="flex-container">
                <div className="content">
                  <h2>Join CDAC University</h2>
                  <h5
                    className="text-center
                  "
                  >
                    {" "}
                    Make Your Future Bright
                  </h5>
                  <div className="div text-center">
                    <Link className="link text-white" to="/registerform">
                      <button className="btn btn-primary text-center mt-4">
                        {" "}
                        Register Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="social text-center mt-4">
                  <i className="fab fa-facebook-f icon"></i>
                  <i className="fa-brands fa-instagram icon"></i>
                  <i className="fa-brands fa-twitter icon"></i>
                  <i className="fa-brands fa-youtube icon"></i>
                </div>
              </div>
            </div>
          </div>
          {/* 9945205684 Phani.blrtraining@gmail.com */}
        </div>
      </div>
    </>
  );
}

export default Register;
