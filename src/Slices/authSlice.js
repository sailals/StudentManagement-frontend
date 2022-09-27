// Import -->

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./url";
import jwtdecode from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Initial State -->

const initialState = {
  token: localStorage.getItem("token"),
  firstname: "",
  email: "",
  _id: "",
  isAdmin: "",
  isVerified: {},
  image: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  updateStatus: "",
  studentLoaded: false,
};

// TO Register a Student -->

export const registerStudent = createAsyncThunk(
  "auth/registerStudent",
  async (student, { rejectedWithValue }) => {
    console.log(student);
    try {
      const token = await axios.post(`${url}/register`, {
        generalinfo: {
          firstname: student.generalinfo.firstname,
          lastname: student.generalinfo.lastname,
          mothersname: student.generalinfo.mothersname,
          fathersname: student.generalinfo.fathersname,
          lcollege: student.generalinfo.lcollege,
          dob: student.generalinfo.dob,
        },
        studentaddress: {
          street: student.studentaddress.street,
          address: student.studentaddress.address,
          pincode: student.studentaddress.pincode,
          place: student.studentaddress.place,
          country: student.studentaddress.country,
          stdcode: student.studentaddress.stdcode,
          phone: student.studentaddress.phone,
          mobile: student.studentaddress.mobile,
        },
        sscdetails: {
          rollno: student.sscdetails.rollno,
          board: student.sscdetails.board,
          school: student.sscdetails.school,
          passingYear: student.sscdetails.passingYear,
          percentageMarks: student.sscdetails.percentageMarks,
        },
        hscdetails: {
          rollno: student.hscdetails.rollno,
          board: student.hscdetails.board,
          collegeName: student.hscdetails.collegeName,
          passingYear: student.hscdetails.passingYear,
          percentageMarks: student.hscdetails.percentageMarks,
        },
        email: student.email,
        password: student.password,
        image: student.image,
        pdfImage: student.pdfImage,
        pdfImageHsc: student.pdfImageHsc,
      });

      localStorage.setItem("token", token.data);
      toast.success("Registered Successfully", {
        position: "bottom-left",
      });
      return token.data;
    } catch (error) {
      toast.error(`Unable to Register: ${error.response.data}`, {
        position: "bottom-left",
      });
      console.log(error.response.data);
      return rejectedWithValue(error.response.data);
    }
  }
);

// LOGIN STUDENT -->

export const loginstudent = createAsyncThunk(
  "auth/loginstudent",

  async (student, { rejectedWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        email: student.email,
        password: student.password,
      });
      localStorage.setItem("token", token.data);
      toast.success("Login Successfully", {
        position: "bottom-left",
      });
      return token.data;
    } catch (error) {
      toast.error(`Unable to Login: ${error.response.data}`, {
        position: "bottom-left",
      });
      console.log(error.response.data);
      return rejectedWithValue(error.response.data);
    }
  }
);

// UPDATE STUDENT PAYMENT STATUS-->

export const updatePayment = createAsyncThunk(
  "auth/updatePayment",
  async (studentid) => {
    try {
      const res = await axios.put(`${url}/studentUpdate/${studentid}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadStudent(state, action) {
      const token = state.token;
      if (token) {
        const student = jwtdecode(token);

        return {
          ...state,
          token: token,
          firstname: student.firstname,
          email: student.email,
          _id: student._id,
          isAdmin: student.isAdmin,
          isVerified: student.isVerified,
          image: student.image,
          studentLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      toast.success("Logout Successfully", {
        position: "bottom-left",
      });
      return {
        ...state,
        token: "",
        firstname: "",
        email: "",
        _id: "",
        isAdmin: "",
        isVerified: "",
        image: "",
        studentLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerStudent.pending, (state, action) => {
      return {
        ...state,
        registerStatus: "pending",
      };
    });
    builder.addCase(registerStudent.fulfilled, (state, action) => {
      if (action.payload) {
        const student = jwtdecode(action.payload);

        return {
          ...state,
          token: action.payload,
          firstname: student.firstname,
          email: student.email,
          _id: student._id,
          isAdmin: student.isAdmin,
          isVerified: student.isVerified,
          image: student.image,
          registerStatus: "Success",
        };
      } else {
        return state;
      }
    });
    builder.addCase(registerStudent.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
      };
    });
    // FOR LOGIN

    builder.addCase(loginstudent.pending, (state, action) => {
      return {
        ...state,
        loginStatus: "pending",
      };
    });
    builder.addCase(loginstudent.fulfilled, (state, action) => {
      if (action.payload) {
        const student = jwtdecode(action.payload);

        return {
          ...state,
          token: action.payload,
          firstname: student.firstname,
          email: student.email,
          _id: student._id,
          isAdmin: student.isAdmin,
          isVerified: student.isVerified,
          image: student.image,
          loginStatus: "Success",
        };
      } else {
        return state;
      }
    });
    builder.addCase(loginstudent.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
      };
    });

    builder.addCase(updatePayment.pending, (state, action) => {
      return {
        ...state,
        updateStatus: "pending",
      };
    });
    builder.addCase(updatePayment.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,

          updateStatus: "Success",
          isVerified: {
            documentverified: true,
            paymentstatus: true,
          },
        };
      } else {
        return state;
      }
    });
    builder.addCase(updatePayment.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "rejected",
      };
    });
  },
  // [updatePayment.pending]: (state, action) => {
  //   state.updateStatus = "pending";
  // },
  // [updatePayment.fulfilled]: (state, action) => {
  //   state.isVerified.paymentstatus = true;
  //   state.updatePayment = "success";
  // },
  // [updatePayment.rejected]: (state, action) => {
  //   state.updateStatus = "rejected";
  // },
});

export const { loadStudent, logoutUser } = authSlice.actions;
export default authSlice.reducer;
