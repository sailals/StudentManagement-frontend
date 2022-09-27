import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Slices/authSlice";

function PageNav() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light transparent sticky-top"
        style={{ background: "#1C2331" }}
      >
        <div className="container">
          <Link className="navbar-brand link text-dark" to="/">
            <img
              className="img-fluid me-3"
              src="../../Images/cdac.png"
              alt=""
              style={{ height: "50px", width: "50px" }}
            />
            CDAC University
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {auth._id ? (
                <>
                  <li
                    onClick={() => dispatch(logoutUser())}
                    className="nav-item"
                  >
                    <Link className="nav-link" to="/">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PageNav;
