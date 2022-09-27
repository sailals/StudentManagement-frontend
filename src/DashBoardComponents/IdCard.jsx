import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./idcard.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "../Slices/url";

const Card = styled.div`
  height: 450px;
  width: 300px;
  padding: 1.3rem 0 1.3rem 0;
  box-shadow: 0 0 5px black;
  background: url("../Images/bgecard.jpg") no-repeat center center/cover;
  border-radius: 20px;
`;
const universityName = styled.h1`
  position: absolute;
  font-weight: 500;
  text-transform: uppercase;
`;

function IdCard() {
  const auth = useSelector((state) => state.auth);
  console.log(auth._id);
  const [student, setStudent] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios(`${url}/studentUpdate/find/${auth._id}`);
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [auth._id]);

  console.log(student);

  return (
    <>
      <div className="container  ">
        <h5 className="mt-5 text-white text-center display-6">Identity Card</h5>
        <div className="banner box-icon text-center mb-4 ">
          <i class="bx bxs-id-card bx-tada text-success"></i>{" "}
        </div>
        <div className="center">
          <div className="row gx-4 gy-2">
            <div className="col-md-6">
              <Card className="">
                <div className="text-center">
                  <div className="pp">
                    <h4 className="universityName mt-3">CDAC University</h4>
                    <img
                      class="cdacimg img-fluid mt-1"
                      src="../Images/cdac.png"
                      alt=""
                    />
                    <br />
                    <img
                      class="mt-2 profile-img"
                      src={student?.image?.url}
                      alt=""
                    ></img>
                  </div>
                  <div class="names">
                    <h2 class="profile-name">
                      {student?.generalinfo?.firstname}{" "}
                      {student?.generalinfo?.lastname}
                    </h2>
                    <h4 class="profile-username">Electrical Engineering</h4>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6  ">
              <Card>
                <div className="pp text-center">
                  <h4 className="universityName mt-3">CDAC University</h4>
                  <img
                    class="square-qr img-fluid mt-4 "
                    src="../Images/qr sample.png"
                    alt=""
                  />
                </div>
                <div class="details text-center mt-5">
                  <h4 class="date">
                    <b>D.O.B. :</b> {student?.generalinfo?.dob}
                  </h4>
                  <h4 class="mobile">
                    <b>Mob. NO. :</b> {student?.studentaddress?.mobile}
                  </h4>
                  <h4 class="address">
                    <b>Address. :</b> {student?.studentaddress?.address}
                  </h4>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IdCard;
