import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IProfile";

type stateType = {
  userInfo: IUser;
};
const initialState: stateType = {
  userInfo: {
    name: "Jovi Daniel",
    userName: "@joviden",
    position: "UX Designer",
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      console.log(action.payload);

      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = profileSlice.actions;

//Selectors
export const userProfileSelector = state => state.profile.userInfo;

export default profileSlice.reducer;
