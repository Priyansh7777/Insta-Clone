import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { users } from "../../backend/db/users";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginInfo:null,
  isLoadingLogin: false,
  isLoadingRegister: false,
  registerInfo: null,
  isSuccess: false,
};
export const login = createAsyncThunk(
  "user/login",
  async ({email,password}) => {
    console.log(email,password);
    try {
        const response = await axios.post(
            `/api/auth/login`,
            {
              email:email,
              password:password,
            }
          );
          console.log(response);
          return response.data;
        }
     catch (err) {
      console.log(err);
    }
  }
);
export const register = createAsyncThunk(
    "register",
    async () => {
      try {
        const response = await axios.post(
          `/api/auth/signup`,
          {
            email: users[0].email,
            password: users[0].password,
          }
        );
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
  );

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoadingLogin = true;
      })
      .addCase(login.fulfilled, (state, action) => {
          state.isLoadingLogin = false;
          state.isSuccess = true;
          console.log(action);
          state.loginInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.loginInfo = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.isLoadingRegister = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingRegister = false;
        state.isSuccess = true;
        console.log(action);
        state.registerInfo = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoadingRegister = false;
        state.isSuccess = true;
        state.registerInfo = action.payload;
      });
  },
});
export default authSlice.reducer;
