import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
// React- Redux -->Part
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer, { loadStudent } from "./Slices/authSlice";
import studentsReducer from "./Slices/studentsSlice";
import studentCountReducer, {
  notPaid,
  notVerified,
  studentCount,
} from "./Slices/numberSlice";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

// Configuring Store -->
const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentsReducer,
    count: studentCountReducer,
  },
});
store.dispatch(loadStudent());
store.dispatch(studentCount());
store.dispatch(notVerified());
store.dispatch(notPaid());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
