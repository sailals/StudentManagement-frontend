import React from "react";

function HealthCare() {
  return (
    <>
      <section className="healthcare mt-5 pt-5 ">
        <div className="container">
          <h1 className="display-3 text-center fw-bold">Health Care</h1>
          <h3 className=" text-center mt-4 mb-5">
            Advancing human health through innovative research, education, and
            care
          </h3>
        </div>

        <div className="container">
          <div className="row mt-5 py-5">
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Health-care-1.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    CDAC Medicine
                  </h4>
                  <p className="card-text">
                    Leading a worldwide revolution in precision health through
                    biomedical research, education and clinical enterprises
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Health-care-2-2048x1365.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    CDAC Health Care
                  </h4>
                  <p className="card-text">
                    Leveraging expertise and advanced technology to deliver
                    unparalleled care for each patient’s unique needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.stanford.edu/wp-content/uploads/2022/04/Health-care-3.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger fw-bold">
                    CDAC Children's Health
                  </h4>
                  <p className="card-text">
                    The only health care network in the Bay Area – and one of
                    the few in the country – exclusively dedicated to pediatric
                    and obstetric care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="div w-100 text-center mt-5">
          <button className="btn btn-danger btn-lg ">
            More about Health Care
          </button>
        </div>
      </section>
    </>
  );
}

export default HealthCare;
