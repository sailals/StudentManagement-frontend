import React from "react";
import "./foot.css";

function Footer() {
  return (
    <>
      <footer id="main-footer" className="py-2  footer">
        <div className="container footer-container">
          <div>
            <img src="../../Images/cdac.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
              accusantium?
            </p>
          </div>
          <div>
            <h3>Email Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="">
              <input
                type="email"
                placeholder="Enter Email...."
                className="form-control w-100"
              />
              <button className="btn btn-danger w-100 mt-3">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="ms-5">Site links</h3>
            <ul className=" list-unstyled ms-5">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Write</li>
            </ul>
          </div>
          <div>
            <h2>Join Our University</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              error.
            </p>
            <button className="btn btn-primary w-100">Join Now</button>
          </div>
          <div>
            <p>Copyright &copy; 2022, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
