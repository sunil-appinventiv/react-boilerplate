import { createSlice } from "@reduxjs/toolkit";
import { fetchCatsData } from "../feature/cats";


const catsData = createSlice({
    name:'cats', 
    initialState:{
        loadingCats:false, 
        cats: [], 
        errorCats : null, 
    }, 
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchCatsData.pending, (state) => {
            state.loadingCats = true;
            state.error = null;
          })
          .addCase(fetchCatsData.fulfilled , (state , action)=> {

            state.loadingCats = false;
            state.cats = action.payload;
            state.errorCats = null
          })
          .addCase(fetchCatsData.rejected , (state , action)=>{
            state.loadingCats = false;
            state.cats = [];
            state.errorCats = action.payload
          })
        }
}) 

export default catsData.reducer