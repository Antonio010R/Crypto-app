import { createSlice } from "@reduxjs/toolkit";
import { getInitialTheme } from "../../utils/themes";

const initialState = {
  currTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      const root = window.document.documentElement;
      const isDark = action.payload === "dark";

      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(action.payload);
      state.currTheme = action.payload;
      localStorage.setItem("color-theme", action.payload);
    },

    setLightTheme: (state, action) => {
      const root = window.document.documentElement;
      const contains = root.classList.contains("dark");
      if (contains) {
        root.classList.remove("dark");
        root.classList.add("light");
        state.currTheme = "light";
        localStorage.setItem("color-theme", "light");
      }
    },

    setDarkTheme: (state, action) => {
      const root = window.document.documentElement;
      const contains = root.classList.contains("light");
      if (contains) {
        root.classList.remove("light");
        root.classList.add("dark");
        state.currTheme = "dark";
        localStorage.setItem("color-theme", "dark");
      }
    },
  },
});

export const { setTheme, setLightTheme, setDarkTheme } = themeSlice.actions;

export const selectTheme = (state) => state.themes.currTheme;
export default themeSlice.reducer;
