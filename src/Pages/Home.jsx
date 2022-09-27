import React from "react";
import Head from "../Components/Navbar/Head";
import Navbar from "../Components/Navbar/Navbar";
import styled from "styled-components";
import News from "../Components/News/News";
import Academics from "../Components/Academics/Academics";
import Research from "../Components/Research/Research";
import Campus from "../Components/Campus/Campus";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import PageNav from "./../Components/PageNavbar/PageNav";
import { useSelector } from "react-redux";
import program from "./../Components/Stripe/Program";
import TypeWriter from "typewriter-effect";
import Staff from "../Components/Staff/Staff";
import Testimonial from "./../Components/Testimonial/Testimonial";

const Overlay = styled.section`
  height: 100vh;
  background: url("https://res.cloudinary.com/dpzyuycb9/image/upload/v1664081520/pang-yuhao-_kd5cxwZOK4-unsplash_1_k5v3jy.jpg")
    no-repeat center center/cover;
  background-attachment: fixed;
  position: relative;
`;

const dim = styled.div``;

function Home() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const opt = { loop: true };

  return (
    <>
      <Overlay>
        <div className="overlay">
          <div className="container ">
            <Head />
            <Navbar />
            <div className="row mt-5">
              <div className="banner col text-left">
                <h1 className="text-white display-3 fw-bolder mt-5 text-center">
                  Join <span className="text-danger">CDAC </span>
                  <TypeWriter
                    className="type"
                    options={opt}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          '<span style="color: #fff;">University</span>'
                        )
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(
                          '<span style="color: #fff;">The Best University</span>'
                        )
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(
                          '<span style="color: #fff;">Enroll Now</span>'
                        )
                        .pauseFor(2000)

                        .start();
                    }}
                  />
                </h1>
                <h5 className="text-white fs-3 mt-4 text-center">
                  Admissions Open
                </h5>
                <div className="box-icon text-center">
                  <i className="bx bxs-graduation bx-tada"></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Overlay>
      <News />
      <Academics />
      <Research />
      <Campus />
      <Testimonial />
      <About />
      <Staff />
      <Footer />
    </>
  );
}

export default Home;
