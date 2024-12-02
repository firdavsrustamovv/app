import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logginUserStart: (state) => {
      state.isLoading = true;
    },
    logginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
    registerinUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
      state.loggedIn = true;
    },
    registerUserFailure: (state) => {
      state.isLoading = false;
      state.error = "error";
    },
  },
});

export const {
  logginUserStart,
  registerinUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
