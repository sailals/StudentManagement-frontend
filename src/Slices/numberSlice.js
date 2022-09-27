import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./url";

const initialState = {
  totalStudents: "",
  notVerified: "",
  notPaid: "",
  status: "",
};

export const studentCount = createAsyncThunk("count/studentCount", async () => {
  const res = await axios.get(`${url}/studentUpdate/studentcount/`);
  return res.data;
});
export const notVerified = createAsyncThunk("count/notVerified", async () => {
  const res = await axios.get(`${url}/studentUpdate/countdocverified/`);
  return res.data;
});
export const notPaid = createAsyncThunk("count/notPaid", async () => {
  const res = await axios.get(`${url}/studentUpdate/countpaydone/`);
  return res.data;
});

const studentCountSlice = createSlice({
  name: "count",
  initialState,

  reducers: {},
  extraReducers: {
    [studentCount.pending]: (state, action) => {
      state.status = "pending";
    },
    [studentCount.fulfilled]: (state, action) => {
      state.status = "success";
      state.totalStudents = action.payload;
    },
    [studentCount.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [notVerified.pending]: (state, action) => {
      state.status = "pending";
    },
    [notVerified.fulfilled]: (state, action) => {
      state.status = "success";
      state.notVerified = action.payload;
    },
    [notVerified.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [notPaid.pending]: (state, action) => {
      state.status = "pending";
    },
    [notPaid.fulfilled]: (state, action) => {
      state.status = "success";
      state.notPaid = action.payload;
    },
    [notPaid.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default studentCountSlice.reducer;
