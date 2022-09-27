import React from "react";
import "./nav.css";

function Head() {
  return (
    <>
      <section className="head">
        <div className="flex">
          <div className="logo flex-center">
            <img src="../../Images/cdac.png" alt="" />
            <h1 className="text-white">CDAC University</h1>
          </div>
          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fa-brands fa-instagram icon"></i>
            <i className="fa-brands fa-twitter icon"></i>
            <i className="fa-brands fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
