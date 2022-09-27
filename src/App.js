import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import RegisterPage from "./Pages/RegisterPage";
import RegisterForm from "./Components/RegiterForm/RegisterForm";
import UserDashBoard from "./Pages/DashBoard/UserDashBoard";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import User_Summary from "./DashBoardComponents/User_Summary";
import CheckOutSuccess from "./Components/Stripe/CheckOutSuccess";
import CheckOutFailure from "./Components/Stripe/CheckOutFailure";
import Admin_Dashboard from "./Components/Dashboard/Admin_Dashboard";
import UserTable from "./Components/Admin_Components/UserTable";
import ViewStudent from "./Components/Admin_Components/ViewStudent";
import IdCard from "./DashBoardComponents/IdCard";
import AllStudents from "./Components/Admin_Components/AllStudents";
import AdminChart from "./Components/Admin_Components/AdminChart";
import EventForm from "./Components/Admin_Components/EventForm";
import StudentTestimonial from "./DashBoardComponents/StudentTestimonial";
import UserViewStudent from "./DashBoardComponents/UserViewStudent";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <SignIn /> */}
      {/* <RegisterPage /> */}
      {/* <RegisterForm /> */}
      {/* <UserDashBoard /> */}
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/viewstudent/:id" element={<ViewStudent />} />
        <Route path="/user" element={<UserDashBoard />}>
          <Route path="summary" element={<User_Summary />} />
          <Route path="idcard" element={<IdCard />} />
          <Route path="testimonial" element={<StudentTestimonial />} />
          <Route path="viewstudent" element={<UserViewStudent />} />
        </Route>

        <Route path="/admin" element={<Admin_Dashboard />}>
          <Route path="usertable" element={<UserTable />} />
          <Route path="allstudent" element={<AllStudents />} />
          <Route path="adminchart" element={<AdminChart />} />
          <Route path="eventform" element={<EventForm />} />
        </Route>

        <Route path="/checkout-success" element={<CheckOutSuccess />} />
        <Route path="/checkout-failure" element={<CheckOutFailure />} />
      </Routes>
    </>
  );
}

export default App;
