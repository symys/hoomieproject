import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginStatus: false
  };

  export const loginSlice = createSlice({
    name: "loginStatus",
    initialState,
    reducers: {
      toggleLoginStatus : (state, action) => {
          state.loginStatus = action.payload;
          // console.log("in slice: "+ state.loginStatus)
      },
      
     
    },
  });
  
  export const { toggleLoginStatus } = loginSlice.actions;
  
  export default loginSlice.reducer;