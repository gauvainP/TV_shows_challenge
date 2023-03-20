import { configureStore } from "@reduxjs/toolkit";
import { showSlice } from "../reducers/showReducer";


export const store = configureStore({
    reducer: {
     show: showSlice,
    
    },
  });

export default store;

