import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAirlines = createAsyncThunk(
     'airlines/getAirlines',
    async ()=>{
        const response = await axios.get(`https://api.instantwebtools.net/v1/airlines`) 
        console.log(response)
        return response.data
    }
)

export const initialState = {
  airlines: [],
  loading: false,
  error: false,
};
const airlineSlice = createSlice({
  name: 'airlines',
  initialState,
  extraReducers: {
     [getAirlines.pending]: (state) => {
      console.log(2222)
      state.loading = true;
      state.error = null;
    },

    [getAirlines.fulfilled]: (state, action) => {
      state.loading = false;
      state.airlines = action.payload;
      state.error = null;
    },

    [getAirlines.rejected]: (state, action) => {
      console.log(4444, action)
      state.loading = false;
      state.error = action.error.message;
     },
  },



});

export default airlineSlice.reducer;