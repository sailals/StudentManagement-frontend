import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [click, setClick] = useState(false);
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <header>
        <nav className="flex ">
          <ul
            className={click ? "mobile-nav" : "flex"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link className="link" to="/">
                Home
              </Link>{" "}
            </li>

            {auth._id ? (
              <></>
            ) : (
              <li>
                <Link className="link" to="/signin">
                  Sign In
                </Link>{" "}
              </li>
            )}
          </ul>
          <div className="start">
            <div className="button">
              {auth._id ? (
                <>
                  {auth.isAdmin ? (
                    <>
                      <Link to="/admin/usertable" className="circle">
                        {" "}
                        {auth.image ? (
                          <>
                            <img
                              className="img-fluid circle"
                              style={{ height: "70px", widith: "70px" }}
                              src={auth.image.url}
                              alt=""
                            />
                          </>
                        ) : (
                          <>
                            <img
                              className="img-fluid "
                              style={{
                                height: "70px",
                                widith: "70px",
                              }}
                              src="../../Images/me.png"
                              alt=""
                            />
                          </>
                        )}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/user/summary" className="circle">
                        {" "}
                        {auth.image ? (
                          <>
                            <img
                              className="img-fluid circle"
                              style={{ height: "70px", widith: "70px" }}
                              src={auth.image.url}
                              alt=""
                            />
                          </>
                        ) : (
                          <>
                            <img
                              className="img-fluid "
                              style={{
                                height: "70px",
                                widith: "70px",
                              }}
                              src="../../Images/me.png"
                              alt=""
                            />
                          </>
                        )}
                      </Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link className="link" to="/register">
                    REGISTER NOW
                  </Link>
                </>
              )}
            </div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
