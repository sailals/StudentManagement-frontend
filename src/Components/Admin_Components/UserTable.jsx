import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentsFetch } from "./../../Slices/studentsSlice";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { url } from "./../../Slices/url";

function UserTable() {
  const [studentcount, setStudentCount] = useState([]);
  const [amount, setAmount] = useState([]);
  const [recent, setRecent] = useState([]);

  // NOof Students
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/studentUpdate/studentcount/`);
      setStudentCount(res.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/studentUpdate/studentpayment/`);
      setAmount(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/studentUpdate/recentstudents/`);
      setRecent(res.data);
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(studentsFetch());
  }, []);

  const { students } = useSelector((state) => state.students);

  return (
    <>
      <section id="mystore">
        <ul class="box-info">
          <li>
            <i class="bx bxs-user"></i>
            <span class="text">
              <h3>{studentcount}</h3>
              <p>Students</p>
            </span>
          </li>

          <li>
            <i class="bx bx-money-withdraw"></i>{" "}
            <span class="text">
              <h3>Rs.{amount}</h3>
              <p>Amount</p>
            </span>
          </li>

          <li>
            <i class="bx bxs-gift"></i>{" "}
            <span class="text">
              <h3>20</h3>
              <p>Books</p>
            </span>
          </li>
        </ul>
      </section>
      <section
        id="content
      "
      >
        <main>
          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Recently Added Students</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recent?.map((data) => (
                    <>
                      <tr>
                        <td>
                          <img src={data?.image?.url} />
                          <p>{data?.generalinfo?.firstname}</p>
                        </td>
                        <td>{new Date(data.createdAt).toDateString()}</td>
                        <td>
                          <span
                            class={
                              data.verified.paymentstatus === true
                                ? "status completed"
                                : data.verified.documentverified === true
                                ? "status process"
                                : "status pending"
                            }
                          >
                            {data.verified.paymentstatus === true
                              ? "Completed"
                              : data.verified.documentverified === true
                              ? "Process"
                              : "Pending"}
                          </span>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Todo */}
            <div class="todo">
              <div class="head">
                <h3>Todos</h3>
                <i class="bx bx-plus"></i>
                <i class="bx bx-filter"></i>
              </div>
              <ul class="todo-list">
                <li class="completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default UserTable;

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
