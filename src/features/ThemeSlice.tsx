import { createSlice } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: "light" | "dark";
};

const savedTheme = localStorage.getItem("theme");

const initialState: ThemeState = {
  mode: savedTheme === "dark" ? "dark" : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
      document.documentElement.setAttribute("data-theme", state.mode);
    },
    // setTheme: (state, action) => {
    //   state.mode = action.payload;
    //   document.documentElement.setAttribute("data-theme", action.payload);
    // },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
