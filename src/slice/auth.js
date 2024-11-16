import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: false,
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
    registerUserSuccess: (state) => {},
    registerUserFailure: (state) => {},
  },
});

export const { logginUserStart, registerinUserStart } = authSlice.actions;
export default authSlice.reducer;
