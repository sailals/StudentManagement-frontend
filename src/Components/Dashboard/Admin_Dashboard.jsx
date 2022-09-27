import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { useSelector } from "react-redux";
import PageNav from "../PageNavbar/PageNav";

function Admin_Dashboard() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <PageNav />
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
                  {auth.firstname} (Admin)
                </p>
              </>
            ) : (
              <>
                <p className="display-6 text-white text-center">Admin</p>
              </>
            )}
            <div className="vertical-nav">
              <NavLink to="/admin/usertable">
                <div className="icons ps-5 mt-4">
                  <i class="fa-solid fa-house text-success fa-2x me-3"></i>{" "}
                  <span className="text-white">Dashboard</span>
                </div>
              </NavLink>
              <NavLink to="/admin/allstudent">
                <div className="icons ps-5 mt-4">
                  <i class="fa-solid fa-user-graduate fa-2x me-3 text-info"></i>{" "}
                  <span className="text-white">All Students</span>
                </div>
              </NavLink>

              <NavLink to="/admin/adminchart">
                <div className="icons ps-5 mt-4">
                  <i class="fa-solid fa-chart-area fa-2x me-3 text-danger"></i>{" "}
                  <span className="text-white">Details </span>
                </div>
              </NavLink>

              <div className="icons ps-5 mt-4">
                <i class="fa-solid fa-book me-3 fa-2x text-warning"></i>{" "}
                <span className="text-white">Library</span>
              </div>
              <NavLink to="/admin/eventform">
                <div className="icons ps-5 mt-4 ">
                  <i class="fa-solid fa-calendar-days  fa-2x me-3 text-primary"></i>
                  {/* <i class="fa-solid fa-gear fa-2x me-3 text-primary"></i>{" "} */}
                  <span className="text-white">Events</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-md-9 " style={{ backgroundColor: "#EEEEEE" }}>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin_Dashboard;
