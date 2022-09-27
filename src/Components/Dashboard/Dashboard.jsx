import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { useSelector } from "react-redux";

function Dashboard() {
  const auth = useSelector((state) => state.auth);
  let paymentstatus = auth.isVerified.paymentstatus;

  return (
    <>
      <section className="dashboard">
        <div className="row">
          <div className="col-md-3 " style={{ backgroundColor: "#0D0E23" }}>
            {auth.image ? (
              <>
                <div className="profile-container">
                  <img src={auth.image.url} alt="" />
                </div>
              </>
            ) : (
              <>
                <div className="profile-container">
                  <img src="../../Images/me.png" alt="" />
                </div>
              </>
            )}
            {auth._id ? (
              <>
                <p className="display-6 text-white text-center">
                  {auth.firstname}
                </p>
              </>
            ) : (
              <>
                <p className="display-6 text-white text-center">Hello</p>
              </>
            )}
            <div className="vertical-nav">
              <NavLink to="/user/summary">
                <div className="icons ps-5 mt-4">
                  <i class="fa-solid fa-house text-success fa-2x me-3"></i>{" "}
                  <span className="text-white">Dashboard</span>
                </div>
              </NavLink>
              {paymentstatus ? (
                <>
                  <NavLink to="/user/idcard">
                    <div className="icons ps-5 mt-4">
                      <i class="fa-solid fa-id-card fa-2x me-3 text-danger"></i>
                      {/* <i class="fa-solid fa-chart-area fa-2x me-3 text-danger"></i>{" "} */}
                      <span className="text-white">ID Card</span>
                    </div>
                  </NavLink>
                </>
              ) : (
                <></>
              )}
              {paymentstatus ? (
                <>
                  <NavLink to="/user/viewstudent">
                    <div className="icons ps-5 mt-4">
                      <i class="fa-solid fa-user-graduate fa-2x me-3 text-info"></i>{" "}
                      <span className="text-white">Details </span>
                    </div>
                  </NavLink>
                </>
              ) : (
                <></>
              )}
              {paymentstatus ? (
                <>
                  <div className="icons ps-5 mt-4">
                    <i class="fa-solid fa-book me-3 fa-2x text-warning"></i>{" "}
                    <span className="text-white">Course Ware</span>
                  </div>
                </>
              ) : (
                <></>
              )}
              {paymentstatus ? (
                <>
                  <NavLink to="/user/testimonial">
                    <div className="icons ps-5 mt-4 ">
                      <i class="fa-solid fa-pen-nib fa-2x me-3 text-primary"></i>{" "}
                      <span className="text-white">Testimonal</span>
                    </div>
                  </NavLink>
                </>
              ) : (
                <> </>
              )}
            </div>
          </div>
          <div className="col-md-9 " style={{ backgroundColor: "#1B1C31" }}>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
