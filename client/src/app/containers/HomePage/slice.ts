import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
  topCars: [],
}

export const HomepageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    }
  }
})

export const { setTopCars } = HomepageSlice.actions
export default HomepageSlice.reducer;