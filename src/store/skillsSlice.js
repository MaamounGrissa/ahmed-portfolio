import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
    name: "skills",
    initialState: [
        {
            id: 1,
            name: "HTML",
            percentage: 90,
            color: "#E44D26",
        },
        {
            id: 2,
            name: "CSS",
            percentage: 80,
            color: "#264DE4",
        },
    ],
    reducers: {
      getSkills: (state, action) => {
        state.value = action.payload;
      }
    }
   });