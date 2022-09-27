import React from "react";
import styled from "styled-components";
import "./about.css";

const Overlay = styled.div`
  height: 40vh;
  background: url("../../Images/about.jpg") center center / cover;
  background-attachment: fixed;
`;
const Over = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

function About() {
  return (
    <>
      <section className="about mt-5 py-5 ">
        <div className="container">
          <h1 className="display-3 text-center fw-bold">
            About <span className="text-danger">Us</span>
          </h1>
          <h4 className=" text-center mt-4">
            Preparing students to make meaningful contributions as engaged
            citizens and leaders in a complex world
          </h4>
          <div className="banner box-icon text-center mb-4">
            <i class="bx bxs-trophy bx-tada text-danger"></i>{" "}
          </div>
        </div>
        <Overlay className="">
          <Over>
            <div className="row align-middle text-white ">
              <div className="col-md-4 text-center align-middle mt-5 pt-5 ">
                <h2 className="fw-bold text-white">Opened In</h2>
                <h4 className="text-white">1994</h4>
              </div>
              <div className="col-md-4 text-center align-middle mt-5 pt-5">
                <h2 className="fw-bold text-white">Students </h2>
                <h4 className="text-white">16,93700</h4>
              </div>
              <div className="col-md-4 text-center align-middle mt-5 pt-5">
                <h2 className="fw-bold text-white">Faculty </h2>
                <h4 className="text-white">2,288 </h4>
              </div>
            </div>
          </Over>
        </Overlay>

        <section class="features text-center">
          <div className="row">
            <div className="col-md-4">
              <div class="container  p-5">
                <i class="fa-solid fa-building-columns fa-3x text-danger mb-3"></i>
                <h3>Great Location</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, illo.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div class="container  p-5">
                <i class="fa-solid fa-trophy fa-3x text-success mb-3"></i>{" "}
                <h3>Award Winning</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, illo.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div class="container  p-5">
                <i class="fa-solid fa-people-group fa-3x text-primary mb-3"></i>{" "}
                <h3>Best Faculty</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, illo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
