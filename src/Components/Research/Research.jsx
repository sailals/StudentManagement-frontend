import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  height: 40vh;
  background: url("../../Images/lab.jpg") center center / cover;
  background-attachment: fixed;
`;
const Over = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

function Research() {
  return (
    <>
      <section className="research mt-5 pt-5 ">
        <div className="container">
          <h1 className="display-3 text-center fw-bold">
            Re<span className="text-danger">search</span>
          </h1>
          <h4 className=" text-center mt-4 mb-5">
            Driving discoveries vital to our world, our health, and our
            intellectual lifeDriving discoveries vital to our world, our health,
            and our intellectual life
          </h4>
          <div className="banner box-icon text-center mb-3">
            <i class="bx bx-test-tube bx-tada text-danger"></i>
          </div>
        </div>
        <Overlay className="">
          <Over>
            <div className="row align-middle text-white ">
              <div className="col-md-4 text-center align-middle mt-5 pt-5 ">
                <h2 className="fw-bold text-white">19 Institutes</h2>
                <h4 className="text-white">cross disciplinary boundaries </h4>
              </div>
              <div className="col-md-4 text-center align-middle mt-5 pt-5">
                <h2 className="fw-bold text-white">20 Libraries</h2>
                <h4 className="text-white">hold over 9.5 million volumes </h4>
              </div>
              <div className="col-md-4 text-center align-middle mt-5 pt-5">
                <h2 className="fw-bold text-white">$1.69 Billion</h2>
                <h4 className="text-white">sponsored research budget </h4>
              </div>
            </div>
          </Over>
        </Overlay>
        <div className="container">
          <div className="row mt-5 py-5">
            <div className="col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664175154/Bao_FAST_ineppp.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Science & Technology{" "}
                  </h4>
                  <p className="card-text">
                    CDAC researchers build $400 self-navigating smart cane
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664175156/wildfire_GettyImages-155308044_fxo05s.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Science & Technology{" "}
                  </h4>
                  <p className="card-text">
                    First detection of light from behind a black hole
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664175156/chemist_dassama_1400-1499x999_j9lgt9.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Science & Technology
                  </h4>
                  <p className="card-text">
                    Building a heart, one layer at a time
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664175155/synthetic_microbiome_cubuc5.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">CDAC Bio-X</h4>
                  <p className="card-text">
                    Biomedical and life science researchers, clinicians,
                    engineers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Research;
