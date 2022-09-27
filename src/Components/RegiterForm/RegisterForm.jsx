import React, { useEffect, useState } from "react";
import PageNav from "../PageNavbar/PageNav";
import "./registerform.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "./../../Slices/authSlice";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [generalinfo, setgeneralinfo] = useState({
    firstname: "",
    lastname: "",
    mothersname: "",
    fathersname: "",
    lcollege: "",
    dob: "",
  });
  const [studentaddress, setstudentaddress] = useState({
    street: "",
    address: "",
    pincode: "",
    place: "",
    country: "",
    stdcode: "",
    phone: "",
    mobile: "",
  });
  const [pdfImage, setPdf] = useState("");
  const [pdfImageHsc, setPdfHsc] = useState("");

  const [sscdetails, setSccDetails] = useState({
    rollno: "",
    board: "",
    school: "",
    passingYear: "",
    percentageMarks: "",
  });

  const handlePDFUpload = (e) => {
    const file = e.target.files[0];
    TransformPDF(file);
  };

  const TransformPDF = (file) => {
    // To convert the selected file to url/string or base64
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPdf(reader.result);
      };
    } else {
      setPdf("");
    }
  };
  const handlePDFUploadHsc = (e) => {
    const file = e.target.files[0];
    TransformPDFHsc(file);
  };

  const TransformPDFHsc = (file) => {
    // To convert the selected file to url/string or base64
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPdfHsc(reader.result);
      };
    } else {
      setPdfHsc("");
    }
  };

  const [hscdetails, setHscDetails] = useState({
    rollno: "",
    board: "",
    collegeName: "",
    passingYear: "",
    percentageMarks: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const student = {
    generalinfo,
    studentaddress,
    sscdetails,
    hscdetails,
    email: email,
    password: password,
    image,
    pdfImage,
    pdfImageHsc,
  };

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    // To convert the selected file to url/string or base64
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };

  const dispatch = useDispatch();

  const handeleSubmit = (e) => {
    dispatch(registerStudent(student));
    e.preventDefault();
  };

  return (
    <>
      <PageNav />
      <div className="container text-white regi">
        <form>
          <div className="form-wrappers  py-2">
            <div className="row page mt-4">
              <div className="col-md-6 form-section">
                <div className="div">
                  <h4 className="text-white mt-3 mb-4 ">General Information</h4>
                  <div className="image-container-form">
                    {image ? (
                      <>
                        <img className="img-fluid" src={image} alt="" />
                      </>
                    ) : (
                      <>
                        <img
                          className="img-fluid"
                          src="../../Images/me.png"
                          alt=""
                        />
                      </>
                    )}
                  </div>
                  <input
                    type="text"
                    className=" custom-input w-50 text-white"
                    placeholder="First Name"
                    onChange={(e) =>
                      setgeneralinfo({
                        ...generalinfo,
                        firstname: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="custom-input w-25 ms-3 mt-3 text-white"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setgeneralinfo({
                        ...generalinfo,
                        lastname: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="custom-input w-100 mt-3 text-white"
                    placeholder="Mother's Name"
                    onChange={(e) =>
                      setgeneralinfo({
                        ...generalinfo,
                        mothersname: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="custom-input w-100 mt-3 text-white"
                    placeholder="Father's Name"
                    onChange={(e) =>
                      setgeneralinfo({
                        ...generalinfo,
                        fathersname: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className=" custom-input w-100 mt-3 text-white"
                    placeholder="Last Appeared College/School Name"
                    onChange={(e) =>
                      setgeneralinfo({
                        ...generalinfo,
                        lcollege: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="custom-input w-100 mt-3 text-white"
                    placeholder="Date Of Birth"
                    onChange={(e) =>
                      setgeneralinfo({
                        ...generalinfo,
                        dob: e.target.value,
                      })
                    }
                  />
                  <input
                    onChange={handleProductImageUpload}
                    accept="image/"
                    type="file"
                    name="file"
                    id="file"
                    className="d-none"
                  />
                  <label className="text-white mt-2 py-2 ms-1" htmlFor="file">
                    Add Profile Photo
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="div">
                  <h4 className="text-dark mt-3 mb-4 ">Contact Details</h4>

                  <input
                    type="text"
                    className=" custom-input w-100 text-dark"
                    placeholder="Street"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        street: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="custom-input w-100 mt-3 text-dark"
                    placeholder="Additional Information"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        address: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="custom-input w-50 mt-3 text-dark"
                    placeholder="Pincode"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        pincode: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="custom-input w-25 mt-3 ms-2 text-dark"
                    placeholder="Place"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        place: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className=" custom-input w-100 mt-3 text-dark"
                    placeholder="Country"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        country: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="custom-input w-25 mt-3 text-dark"
                    placeholder="STD Code"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        stdcode: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="custom-input w-50 mt-3 ms-2 text-dark"
                    placeholder="Phone Number"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        phone: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className=" custom-input w-100 mt-3 text-dark"
                    placeholder="Mobile Number"
                    onChange={(e) =>
                      setstudentaddress({
                        ...studentaddress,
                        mobile: e.target.value,
                      })
                    }
                  />
                  <input
                    type="email"
                    className=" custom-input w-100 mt-3 text-dark"
                    placeholder="Email Id"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className=" custom-input w-100 mt-3 text-dark"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Changes Made to Form from here */}
            <div className="row page">
              <div className="col-md-6">
                <h4 className="text-dark mt-3 mb-4 ">SSC/Equivalent</h4>
                <input
                  type="text"
                  className=" custom-input w-100 mt-3 text-dark"
                  placeholder="Roll Number"
                  onChange={(e) =>
                    setSccDetails({
                      ...sscdetails,
                      rollno: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-dark"
                  placeholder="University Name/Board"
                  onChange={(e) =>
                    setSccDetails({
                      ...sscdetails,
                      board: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-dark"
                  placeholder="School Name"
                  onChange={(e) =>
                    setSccDetails({
                      ...sscdetails,
                      school: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-dark"
                  placeholder="Passing Year"
                  onChange={(e) =>
                    setSccDetails({
                      ...sscdetails,
                      passingYear: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-dark"
                  placeholder="Percentage Marks Obtained"
                  onChange={(e) =>
                    setSccDetails({
                      ...sscdetails,
                      percentageMarks: e.target.value,
                    })
                  }
                />

                <input
                  onChange={handlePDFUpload}
                  accept="image/"
                  type="file"
                  name="filepdf"
                  id="filepdf"
                  className="d-none"
                />
                <label className="text-dark mt-2 py-2 ms-1" htmlFor="filepdf">
                  Add Your SSC Certificate
                </label>
                <div className="doc-container">
                  {pdfImage ? (
                    <>
                      <img className="img-fluid" src={pdfImage} alt="" />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="col-md-6 form-section">
                <h4 className="text-white mt-3 mb-4 ">HSC/Equivalent</h4>
                <input
                  type="text"
                  className=" custom-input w-100 mt-3 text-white"
                  placeholder="Roll Number/PRN Number"
                  onChange={(e) =>
                    setHscDetails({
                      ...hscdetails,
                      rollno: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-white"
                  placeholder="University Name/Board"
                  onChange={(e) =>
                    setHscDetails({
                      ...hscdetails,
                      board: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-white"
                  placeholder="College Name"
                  onChange={(e) =>
                    setHscDetails({
                      ...hscdetails,
                      collegeName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-white"
                  placeholder="Passing Year"
                  onChange={(e) =>
                    setHscDetails({
                      ...hscdetails,
                      passingYear: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className=" custom-input mt-3 w-100 text-white"
                  placeholder="Percentage Marks Obtained"
                  onChange={(e) =>
                    setHscDetails({
                      ...hscdetails,
                      percentageMarks: e.target.value,
                    })
                  }
                />
                <input
                  onChange={handlePDFUploadHsc}
                  accept="image/"
                  type="file"
                  name="filepdfHsc"
                  id="filepdfHsc"
                  className="d-none"
                />
                <label
                  className="text-white mt-2 py-2 ms-1"
                  htmlFor="filepdfHsc"
                >
                  Add Your HSC Certificate
                </label>
                <div className="doc-container">
                  {pdfImageHsc ? (
                    <>
                      <img className="img-fluid" src={pdfImageHsc} alt="" />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            {/* 9945205684 Phani.blrtraining@gmail.com */}
            <div className="flex-button mt-5">
              <button
                onClick={handeleSubmit}
                className="btn btn-primary btn-lg mt-2 py-2 text-center"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
