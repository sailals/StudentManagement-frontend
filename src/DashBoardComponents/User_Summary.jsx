import React, { useEffect, useState } from "react";
import "./dashboard_user.css";
import { useSelector } from "react-redux";
import { url } from "./../Slices/url";
import axios from "axios";

function User_Summary() {
  // Stripe Checkout-->

  const handleCheckOut = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        userId: auth._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/events`);
      console.log(res.data);
      setEvents(res.data);
    }
    fetchData();
  }, []);

  const auth = useSelector((state) => state.auth);

  let docVerified = auth.isVerified.documentverified;
  let paymentstatus = auth.isVerified.paymentstatus;
  console.log(paymentstatus);
  return (
    <>
      {paymentstatus ? (
        <>
          <h5 className="mt-5 text-white text-center display-6">
            Welcome to CDAC University
          </h5>
          <div className="banner box-icon text-center mb-3">
            <i className="bx bxs-graduation bx-tada text-danger"></i>{" "}
          </div>
          <h4 className="mt-5 text-white text-left">Events Happening</h4>
          {events?.map((event) => (
            <div className="event mt-5">
              <div className="row">
                <div className="col-md-4">
                  <img className="event-img" src={event.image.url} alt="" />
                </div>
                <div className="col-md-8">
                  <h5>{event.timing}</h5>
                  <h4>{event.title}</h4>
                  <small className="text-muted">
                    Created At: {new Date(event.createdAt).toDateString()}
                  </small>
                  <p>{event.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="timeline mt-5">
            <div className="containerss left">
              <div className="content">
                <i className="fa-solid fa-circle-check fa-2x text-success"></i>
                <p>Registration Successfully completed</p>
              </div>
            </div>
            <div className="containerss left">
              <div className="content">
                {docVerified ? (
                  <>
                    <i className="fa-solid fa-circle-check fa-2x text-success"></i>{" "}
                    <p>Document Verification Complete</p>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-circle-xmark fa-2x text-danger"></i>
                    <p>Document Verification (Pending)</p>
                  </>
                )}
              </div>
            </div>
            {docVerified ? (
              <>
                <div className="containerss left">
                  <div className="content">
                    <i className="fa-solid fa-circle-xmark fa-2x text-danger mb-1"></i>{" "}
                    <p>Fees Payment (Pending)</p>
                    <div className="div text-end">
                      <button
                        onClick={() => handleCheckOut()}
                        className="mt-0 btn btn-primary "
                      >
                        $ Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
}
export default User_Summary;
