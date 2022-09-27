import React, { useEffect } from "react";
import PageNav from "../PageNavbar/PageNav";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser, updatePayment } from "./../../Slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function CheckOutSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(updatePayment(auth._id));
    dispatch(logoutUser());

    navigate("/");
  }, []);

  return (
    <>
      <PageNav />
      <div className="container">
        <div className="wrappers  py-2">
          <img src="../../Images/pay.png" alt="" />

          {/* 9945205684 Phani.blrtraining@gmail.com */}
        </div>
        <div className="social text-center mt-4">
          <i className="fab fa-facebook-f icon"></i>
          <i className="fa-brands fa-instagram icon"></i>
          <i className="fa-brands fa-twitter icon"></i>
          <i className="fa-brands fa-youtube icon"></i>
        </div>
      </div>
    </>
  );
}

export default CheckOutSuccess;
