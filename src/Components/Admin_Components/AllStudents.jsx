import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentsFetch } from "./../../Slices/studentsSlice";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { url } from "./../../Slices/url";
import { toast } from "react-toastify";
import AdminChart from "./AdminChart";

function AllStudents() {
  const [studentcount, setStudentCount] = useState([]);
  const [docverified, setDocVerified] = useState([]);
  const [paymentdone, setPaymentDone] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/studentUpdate/studentcount/`);
      setStudentCount(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/studentUpdate/countdocverified/`);
      setDocVerified(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/studentUpdate/countpaydone/`);
      setPaymentDone(res.data);
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(studentsFetch());
  }, []);

  const handleDelete = (id) => {
    async function deleteStudent() {
      const response = await axios.delete(`${url}/studentUpdate/${id}`);
      console.log(response.data);
      toast.success("Record Successfully Deleted", { position: "bottom-left" });
      navigate("/admin/usertable");
    }
    deleteStudent();
  };

  const { students } = useSelector((state) => state.students);
  let count = 0;
  const rows =
    students &&
    students.map((student) => {
      count++;
      return {
        id: student._id,
        // id: count,
        image: student.image.url,
        firstname: student.generalinfo.firstname,
        lastname: student.generalinfo.lastname,
        email: student.email,
        place: student.studentaddress.place,
        verified: student.verified.documentverified,
        payment: student.verified.paymentstatus,
      };
    });
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "image",
      headerName: "Profile",
      width: 130,
      renderCell: (params) => {
        return (
          <img
            src={params.row.image}
            className="img-fluid "
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            alt=""
          />
        );
      },
    },
    { field: "firstname", headerName: "Name", width: 110 },
    { field: "lastname", headerName: "Last Name", width: 110 },
    {
      field: "email",
      headerName: "Email",
      width: 130,
    },
    {
      field: "place",
      headerName: "Place",
      width: 150,
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 80,
    },
    {
      field: "payment",
      headerName: "Payment",
      width: 80,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 170,
      renderCell: (params) => {
        return (
          <Actions>
            <button
              onClick={() => navigate(`/viewstudent/${params.row.id}`)}
              className="btn btn-success"
            >
              View
            </button>
            <button
              onClick={() => handleDelete(params.row.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </Actions>
        );
      },
    },
  ];

  return (
    <>
      <section id="mystore">
        <ul class="box-info">
          <li>
            <i class="bx bxs-user"></i>
            <span class="text">
              <h3>{studentcount}</h3>
              <p>No. Students</p>
            </span>
          </li>

          <li>
            <i class="bx bx-text"></i>{" "}
            <span class="text">
              <h3>{docverified}</h3>
              <p>Verification Pending</p>
            </span>
          </li>

          <li>
            <i class="bx bxs-dollar-circle"></i>{" "}
            <span class="text">
              <h3>{paymentdone}</h3>
              <p>Payment Pending</p>
            </span>
          </li>
        </ul>
      </section>
      <div
        style={{
          height: 500,
          width: "auto",
          backgroundColor: "#fff",
          borderRadius: "14px",
        }}
        className="mt-5 py-5 "
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

export default AllStudents;

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`;
const View = styled.button`
  background-color: rgb(114, 225, 40);
`;
