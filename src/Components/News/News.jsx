import React from "react";
import "./news.css";
import styled from "styled-components";

const newscontainer = styled.div`
  height: 50vh;
`;

function News() {
  return (
    <>
      <section id="news" className="news mt-5 py-5">
        <div className="container">
          <h1 className="display-3 text-center fw-bold">
            University <span className="text-danger">News</span>
          </h1>
          <h4 className=" text-center mt-4">
            Stories about people, research and innovation across the Farm
          </h4>
          <div className="banner box-icon text-center">
            <i class="bx bxs-news bx-tada text-danger"></i>{" "}
          </div>

          <div className="row mt-5 pt-4 gx-2 gy-2">
            <div className="card-columns"></div>
            <div className="col-md-6">
              <div className="newsContainer ">
                <div className="news-overlay">
                  <h6 className="text-white">IN SPOTLIGHT</h6>
                  <h5 className="text-white">
                    CDAC SCHOLAR FINDS WAY TO TREAT CANCER
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664174868/GettyImages-1263459468_ieslaa.jpg"
                      alt="Title"
                    />
                    <div className="card-body">
                      <h4 className="card-title text-danger">
                        Science & Technology
                      </h4>
                      <p className="card-text">
                        OceanOne connects human’s sight and touch to the deep
                        sea
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664174896/Physician-stress_xiwid8.jpg"
                      alt="Title"
                    />
                    <div className="card-body">
                      <h4 className="card-title text-danger">
                        Science & Technology
                      </h4>
                      <p className="card-text">
                        Extreme heat’s impact on labor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 pt-3 gx-2 gy-2">
            <div className="col-md-6">
              <div className="row">
                <div className="col">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664174925/LysosomeOmics_resized_b5isbt.jpg"
                      alt="Title"
                    />
                    <div className="card-body">
                      <h4 className="card-title text-danger">
                        Science & Technology
                      </h4>
                      <p className="card-text">
                        OceanOne connects human’s sight and touch to the deep
                        sea
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="https://res.cloudinary.com/dpzyuycb9/image/upload/v1664174962/EVcharging_kplehj.jpg"
                      alt="Title"
                    />
                    <div className="card-body">
                      <h4 className="card-title text-danger">
                        Science & Technology
                      </h4>
                      <p className="card-text">
                        Extreme heat’s impact on labor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="newsContainers ">
                <div className="news-overlay">
                  <h6 className="text-white">IN SPOTLIGHT</h6>
                  <h5 className="text-white">
                    CDAC SCHOLAR FINDS WAY TO TREAT CANCER
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
