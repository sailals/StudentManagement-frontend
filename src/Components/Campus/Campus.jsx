import React from "react";

function Campus() {
  return (
    <>
      <section className="campus mt-5 pt-5 ">
        <div className="container">
          <h1 className="display-3 text-center fw-bold">
            Campus <span className="text-danger">Life</span>
          </h1>
          <h4 className=" text-center mt-4 mb-4">
            Building a vibrant community of creative and accomplished people
            from around the world
          </h4>
          <div className="banner box-icon text-center ">
            <i class="bx bxs-heart bx-tada text-danger"></i>{" "}
          </div>
        </div>

        <div className="container">
          <div className="row mt-3 py-5">
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Campus-life-1.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Student Life
                  </h4>
                  <p className="card-text">
                    A residential campus with diverse housing, exceptional
                    dining, health care and over 600 student organizations
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Campus-life-2.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Arts & Culture
                  </h4>
                  <p className="card-text">
                    A rich tradition of fostering creativity and a vibrant arts
                    district on campus
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Campus-life-3.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Recreation & Wellness
                  </h4>
                  <p className="card-text">
                    State-of-the-art facilities and fitness programs to
                    encourage movement and play
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

export default Campus;
