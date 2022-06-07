import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLogin = createAsyncThunk(
     'users/getLogin',
    async (data)=>{
      console.log(11111)
      const body = {
          "user": {
            "email": data.email,
            "password":  data.password
          }
        }
        const response = await axios.post(`https://react-rails-api-demo.herokuapp.com/api/v1/signin`, body )
        console.log(response)
        localStorage.setItem('user-info', JSON.stringify(response.data));
        return response.data
    }
)

export const initialState = {
  users: [],
  loading: false,
  error: false,
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getLogout: (state, action) => {
      state.users = null;
      localStorage.removeItem('user-info');
      state.loading = false;
    },
  },

  extraReducers: {
     [getLogin.pending]: (state) => {
      console.log(2222)
      state.loading = true;
      state.error = null;
    },

    [getLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },

    [getLogin.rejected]: (state, action) => {
      console.log(4444, action)
      state.loading = false;
      state.error = action.error.message;
     },
  },



});

export const { getLogout } = userSlice.actions;
export default userSlice.reducer;