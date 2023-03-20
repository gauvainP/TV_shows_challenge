import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
name: 'show',
initialState: {title: '' },
// reducers: {
//     setShow: (state, action) =>{
//         console.log('in set show '+ action.payload);
//         state.value = action.payload;
//     },

// }


})



//export const {setShow} = showSlice.actions; 
export default showSlice.reducer;