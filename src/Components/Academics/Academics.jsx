import React from "react";

function Academics() {
  return (
    <>
      <section className="academics mt-5 py-5 ">
        <div className="container">
          <h1 className="display-3 text-center fw-bold">
            Acade<span className="text-danger">mics</span>
          </h1>
          <h4 className=" text-center mt-4">
            Preparing students to make meaningful contributions as engaged
            citizens and leaders in a complex world
          </h4>
          <div className="banner box-icon text-center">
            <i className="bx bx-atom bx-tada text-danger"></i>
          </div>

          <div className="row text-center mt-5 py-3">
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Academics-1.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Undergraduate Education
                  </h4>
                  <p className="card-text">
                    Rich learning experiences that provide a broad liberal arts
                    foundation and deep subject-area expertise
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Academics-2.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Graduate Education
                  </h4>
                  <p className="card-text">
                    Unsurpassed opportunities to participate in the advancement
                    of entire fields of knowledge
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Academics-3.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    Lifelong Learning{" "}
                  </h4>
                  <p className="card-text">
                    Continuing adult education, executive and professional
                    programs, and programs for K-12 students
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

export default Academics;
