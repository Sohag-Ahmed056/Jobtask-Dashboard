// redux/features/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: Cookies.get("token") || null,
    user: null as any,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      Cookies.set("token", action.payload.token, { expires: 7 });
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      Cookies.remove("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer ; // ✅ this line MUST exist
export const selectIsAuthenticated = (state: any) => !!state.auth.token;
