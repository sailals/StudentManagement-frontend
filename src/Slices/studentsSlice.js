import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "./url";

const initialState = {
  students: [],
  status: null,
  editStatus: null,
};

// Fetching students from the backend using async thunk
export const studentsFetch = createAsyncThunk(
  "students/studentsFetch",
  async () => {
    const response = await axios.get(`${url}/studentUpdate`);

    return response.data;
  }
);

// doc verification-->

export const studentEdit = createAsyncThunk(
  "students/studentsEdit",
  async (id) => {
    try {
      const response = await axios.put(`${url}/docverification/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,

  reducers: {},
  extraReducers: {
    [studentsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [studentsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = action.payload;
    },
    [studentsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [studentEdit.pending]: (state, action) => {
      state.status = "pending";
    },
    [studentEdit.fulfilled]: (state, action) => {
      const updatedStudent = state.students.map((student) => {
        return student._id === action.payload._id ? action.payload : student;
      });

      state.students = updatedStudent;

      state.editStatus = "success";
      toast.success("Student Verified!");
    },
    [studentEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
  },
});

export default studentsSlice.reducer;
