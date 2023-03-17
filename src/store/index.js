import { configureStore } from "@reduxjs/toolkit";
import { skillsSlice } from "./skillsSlice";
 
export const store = configureStore({
  reducer: {
    skills: skillsSlice,
  },
});