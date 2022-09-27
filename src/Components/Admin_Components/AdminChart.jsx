import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./../../Slices/url";

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useSelector } from "react-redux";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function AdminChart() {
  const { totalStudents, notVerified, notPaid } = useSelector(
    (state) => state.count
  );

  const [studentcount, setStudentCount] = useState([]);
  const [docverified, setDocVerified] = useState([]);
  const [paymentdone, setPaymentDone] = useState([]);

  let val1 = 3;
  let val2 = 9;
  let val3 = 4;

  const data = [
    { name: "Verification Pending", value: parseInt(notVerified) },
    { name: "Total Students", value: parseInt(totalStudents) },
    { name: "Payment Pending", value: parseInt(notPaid) },
  ];

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
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </>
  );
}

export default AdminChart;
