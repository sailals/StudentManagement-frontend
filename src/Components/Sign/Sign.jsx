import React, { useEffect, useState } from "react";
import "./sign.css";
import { useDispatch, useSelector } from "react-redux";
import { loginstudent } from "../../Slices/authSlice";

import { useNavigate } from "react-router-dom";
function Sign() {
  const [student, setStudent] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginstudent(student));
  };

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  return (
    <>
      <div className="container">
        <div className="wrappers  py-2">
          <div className="row page">
            <div className="col-md-6">
              <img
                src="../../Images/signin.jpg"
                alt=""
                className="img-fluid mt-4"
                style={{ height: "550px" }}
              />
            </div>
            <div className="col-md-6">
              <form action="" className="mt-5 pt-5 ">
                <h3>SIGN IN</h3>
                <h2>Welcome back !</h2>
                <input
                  type="text"
                  className="form-control w-100 mt-3"
                  placeholder="User Name"
                  onChange={(e) =>
                    setStudent({ ...student, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  className="form-control w-100 mt-3"
                  placeholder="Password"
                  onChange={(e) =>
                    setStudent({ ...student, password: e.target.value })
                  }
                />
                <span className="text-muted mt-4 small fw-light fw">
                  By signing in, I agree to the CDAC Privacy Statement and Terms
                  of Service.
                </span>
                <button
                  onClick={handleClick}
                  className="btn btn-primary w-100 mt-4"
                >
                  Sig In
                </button>
              </form>
              <div className="social text-center mt-4">
                <i className="fab fa-facebook-f icon"></i>
                <i className="fa-brands fa-instagram icon"></i>
                <i className="fa-brands fa-twitter icon"></i>
                <i className="fa-brands fa-youtube icon"></i>
              </div>
            </div>
          </div>
          {/* 9945205684 Phani.blrtraining@gmail.com */}
        </div>
      </div>
    </>
  );
}

export default Sign;
