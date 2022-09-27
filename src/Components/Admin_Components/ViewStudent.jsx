import React, { useEffect, useState } from "react";
import PageNav from "./../PageNavbar/PageNav";
import { url } from "./../../Slices/url";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { studentEdit } from "../../Slices/studentsSlice";
import Download from "./../DownloadPdf/Download";

function ViewStudent() {
  const dispatch = useDispatch();
  const params = useParams();
  const [student, setStudent] = useState({});
  console.log(student);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios(`${url}/studentUpdate/find/${params.id}`);
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const verifyStudent = (e) => {
    dispatch(studentEdit(params.id));

    e.preventDefault();
  };

  const handlePrint = () => {
    window.print();
    return false;
  };

  return (
    <>
      <section
        className="pb-5"
        id="printpage"
        style={{ backgroundColor: "#0D0E23", color: "white" }}
      >
        <PageNav />
        <div className="container m-auto">
          <div className="inf-container" id="print">
            <div className="row mt-5 ">
              <div className="col">
                <div className="image">
                  {student.image?.url ? (
                    <>
                      <img
                        src={student.image.url}
                        className="img-fluid"
                        style={{
                          height: "200px",
                          width: "200px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="../../Images/me.png"
                        className="img-fluid"
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="row  mt-2 ">
              <div className="col">
                <div className="general">
                  <h5
                    className="mt-4 display-6 text-white"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    Personal Details
                  </h5>

                  <p className="text-white">
                    First Name : {student.generalinfo?.firstname} LastName:{" "}
                    {student.generalinfo?.lastname}
                  </p>
                  <p className="text-white">
                    Father's Name : {student.generalinfo?.fathersname} Mother's
                    Name : {student.generalinfo?.mothersname}
                  </p>

                  <p className="text-white">
                    Last College Appeared : {student.generalinfo?.lcollege}
                  </p>
                  <p className="text-white">
                    D.O.B : {student.generalinfo?.dob}{" "}
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="address">
                  <h5
                    className="mt-4 display-6 text-white"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    Contact Details
                  </h5>
                  <p className="text-white">
                    Street: {student.studentaddress?.address}{" "}
                  </p>
                  <p className="text-white">
                    Address: {student.studentaddress?.street}
                  </p>
                  <p className="text-white">
                    Country: {student.studentaddress?.country}
                  </p>
                  <p className="text-white">
                    Place: {student.studentaddress?.place}
                  </p>
                  <p className="text-white">
                    Pin: {student.studentaddress?.pincode}
                  </p>
                  <p className="text-white">Email : {student?.email}</p>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <div className="ssc">
                  <h5
                    className="mt-4 display-6 text-white"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    SSC Details
                  </h5>
                  <table className="table table-striped table-danger">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Roll No.</th>
                        <th scope="col">Board</th>
                        <th scope="col">School</th>
                        <th scope="col">Passing Year</th>
                        <th scope="col">Percentage %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>{student.sscdetails?.rollno}</td>
                        <td>{student.sscdetails?.board}</td>
                        <td> {student.sscdetails?.school}</td>
                        <td>{student.sscdetails?.passingYear} </td>
                        <td> {student.sscdetails?.percentageMarks}</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <p>Roll no: {student.sscdetails?.rollno} </p>
                  <p>Board: {student.sscdetails?.board}</p>
                  <p>School: {student.sscdetails?.school}</p>
                  <p>Passing Year: {student.sscdetails?.passingYear}</p>
                  <p>Percentage: {student.sscdetails?.percentageMarks}</p> */}
                </div>
              </div>
              <div className="col">
                <div className="hsc">
                  <h5
                    className="mt-4 display-6 text-white"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    HSC Details
                  </h5>
                  <table className="table table-striped table-danger">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Roll No.</th>
                        <th scope="col">Board</th>
                        <th scope="col">College Name</th>
                        <th scope="col">Passing Year</th>
                        <th scope="col">Percentage %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td> {student.hscdetails?.rollno}</td>
                        <td> {student.hscdetails?.board}</td>
                        <td> {student.hscdetails?.collegeName}</td>
                        <td>{student.hscdetails?.passingYear}</td>
                        <td> {student.hscdetails?.percentageMarks}</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <p>HSC Roll no: {student.hscdetails?.rollno} </p>
                  <p>HSC Board: {student.hscdetails?.board}</p>
                  <p>HSC School: {student.hscdetails?.collegeName}</p>
                  <p>HSC Passing Year: {student.hscdetails?.passingYear}</p>
                  <p>HSC Percentage: {student.hscdetails?.percentageMarks}</p> */}
                </div>
              </div>
            </div>
            <p style={{ pageBreakAfter: "always" }}></p>{" "}
            <div className="row">
              <div className="col">
                <div className="imagePdfContainer">
                  <h5
                    className="mt-4 display-6 mb-4 text-white"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    SSC Certificate
                  </h5>
                  {student.pdfImage?.url ? (
                    <>
                      <img
                        src={student.pdfImage.url}
                        className="img-fluid "
                        style={{
                          height: "400px",
                          width: "50%",
                          border: "1px solid black",
                        }}
                        alt=""
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <p style={{ pageBreakAfter: "always" }}></p>{" "}
            <div className="row ">
              <div className="col">
                <div className="imagePdfContainer">
                  <h5
                    className="mt-5 display-6 mb-4 text-white"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    HSC Certificate
                  </h5>
                  {student.pdfImageHsc?.url ? (
                    <>
                      <img
                        src={student.pdfImageHsc.url}
                        className="img-fluid"
                        style={{
                          height: "400px",
                          width: "50%",
                          border: "1px solid black",
                        }}
                        alt=""
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Download
                className=""
                downloadFileName="info"
                rootElementId="printpage"
              />
              {student?.verified?.documentverified ? (
                <>
                  <div className="div mt-4">
                    <h5 className="text-white">Documents Verified</h5>
                  </div>
                </>
              ) : (
                <>
                  <div className="div mt-4 mb-5 pb-5">
                    <button onClick={verifyStudent} className="btn btn-success">
                      Verify Student
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="col"></div>
          </div>
          {/* 9945205684 Phani.blrtraining@gmail.com */}
        </div>
      </section>
    </>
  );
}

export default ViewStudent;
