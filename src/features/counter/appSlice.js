import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
  name : "app",
  initialState :{
    roomid : null,
  },
  reducers :{
    enterroom : (state, action) =>{
      state.roomid = action.payload.roomid;
    }
  }
})

export const { enterroom } = appSlice.actions

export const selectroomid = (state) => state.app.roomid

export default appSlice.reducer