import React, { useState } from "react";

function Navbar_New() {
  const [isActive, setActive] = useState(false);
  const [crossActive, setCrossActive] = useState(false);

  const handleCross = () => {
    setCrossActive(!crossActive);
    setActive(false);
  };

  const handleClick = () => {
    setActive(!isActive);
    setCrossActive(false);
  };
  return (
    <>
      <header className="header" id="header">
        {/* Navbar */}
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img className="nav__logo-img" src="/Images/cdac.png" alt="" />
            <p className="nav-text">CDAC University</p>
          </a>
          <div
            className={
              isActive
                ? crossActive
                  ? "nav__menu"
                  : "nav__menu show-menu "
                : "nav__menu"
            }
            id="nav__menu"
          >
            <ul className="nav__list">
              <li className="nav__item">Home</li>

              <li className="nav__item">Log In</li>

              <li className="nav__item">Sign Up</li>
            </ul>

            <div onClick={handleCross} className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>

            <img src="Images/nav-light.png" alt="" className="nav__img" />
          </div>

          <div className="nav__btns">
            <div onClick={handleClick} className="nav__toggle" id="nav-toggle">
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar_New;
