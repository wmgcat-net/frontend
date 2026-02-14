import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
    name: "darkMode",
    initialState: {
        isDarkMode: Boolean(localStorage.getItem("dark")) ?? true
    },
    reducers: {
        switcher: (state) => {
            state.isDarkMode =! state.isDarkMode;
            if (state.isDarkMode)
                localStorage.setItem("dark", String(state.isDarkMode));
            else localStorage.removeItem("dark");
            changeDocMode(state.isDarkMode);
        }
    }
});

export const changeDocMode = (isDarkMode: boolean) => {
    if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark", String(true));
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("dark");
    }
}
export const { switcher } = darkMode.actions;
export default darkMode.reducer;